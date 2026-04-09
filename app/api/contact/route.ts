import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

const transportOptions: SMTPTransport.Options = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

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
