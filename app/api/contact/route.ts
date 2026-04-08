import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

// ── In-memory rate limiter ─────────────────────────────────────────────────
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;

  entry.count++;
  return true;
}

// ── Validation helpers ─────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_ALLOWED_CHARS_RE = /^[\d\s\+\-\(\)\.]+$/;
const HTML_URL_RE = /<[^>]+>|https?:\/\/|www\./i;

function validatePhone(raw: string): string | null {
  if (!raw) return null; // optional field
  if (!PHONE_ALLOWED_CHARS_RE.test(raw))
    return "Phone number contains invalid characters. Use digits, spaces, dashes, or parentheses.";
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 10)
    return `Phone number is too short — you entered ${digits.length} digit${digits.length === 1 ? "" : "s"}, but a valid number needs at least 10.`;
  if (digits.length > 15)
    return "Phone number is too long. Please double-check the number.";
  return null;
}

function validate(body: Record<string, unknown>): string | null {
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name)
    return "Full name is required.";
  if (name.length < 2)
    return "Name is too short — please enter your full name.";
  if (name.length > 100)
    return "Name is too long (max 100 characters).";
  if (HTML_URL_RE.test(name))
    return "Name contains invalid characters — please remove any links or HTML.";

  if (!email)
    return "Email address is required.";
  if (!EMAIL_RE.test(email))
    return "That email address doesn't look right — please check the format (e.g. you@example.com).";

  const phoneError = validatePhone(phone);
  if (phoneError) return phoneError;

  if (!message)
    return "Please include a message so we know how to help.";
  if (message.length < 10)
    return "Message is too short — please add a bit more detail (at least 10 characters).";
  if (message.length > 2000)
    return `Message is too long (${message.length} characters). Please keep it under 2000.`;
  if (HTML_URL_RE.test(message))
    return "Message contains invalid content — please remove any links or HTML tags.";

  return null;
}

// ── Transport ──────────────────────────────────────────────────────────────
const transportOptions: SMTPTransport.Options = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
};

// ── Handler ────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later or call us at 778-805-9888." },
      { status: 429 }
    );
  }

  const body = await req.json();

  // Honeypot — bots fill this, humans don't
  if (body.website) {
    // Silently succeed so bots don't know they were caught
    return NextResponse.json({ ok: true });
  }

  // Timing check — reject submissions under 3 seconds
  const loadedAt = Number(body._t);
  if (!loadedAt || Date.now() - loadedAt < 3000) {
    return NextResponse.json({ ok: true }); // silent reject
  }

  // Field validation
  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const { name, email, phone, service, message } = body;

  const transporter = nodemailer.createTransport(transportOptions);

  try {
    await transporter.sendMail({
      from: `"Barge Bros Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service: ${service || "Not specified"}`,
        `Message:\n${message}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please call us at 778-805-9888." },
      { status: 500 }
    );
  }
}
