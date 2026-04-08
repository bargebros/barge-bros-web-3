"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceOptions = [
  "Dock & Lift Pressure Washing",
  "Shoreline & Beach Cleanup",
  "Dock Maintenance",
  "Dock Ladder & Solar Light Installation",
  "Waterfront Furniture Setup",
  "Barge Material Delivery",
  "Other / Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [toast, setToast] = useState<"success" | "error" | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("Something went wrong. Please try again.");
  const [loadedAt] = useState<number>(() => Date.now());

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
          _t: loadedAt,                 // timing token
        }),
      });

      if (res.ok) {
        setStatus("success");
        setToast("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        setToast("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
      setToast("error");
    }
  }

  return (
    <>
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className={`fixed inset-x-0 top-0 z-50 flex flex-col items-center justify-center gap-6 h-screen ${
              toast === "success"
                ? "bg-[#FFCE00] text-[#0D0D0D]"
                : "bg-red-600 text-white"
            }`}
          >
            {toast === "success" ? (
              <>
                <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-4xl font-bold tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>Message Sent!</p>
                <p className="text-lg font-medium opacity-80">We&rsquo;ll be in touch within 24 hours.</p>
              </>
            ) : (
              <>
                <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-4xl font-bold tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>Something went wrong</p>
                <p className="text-lg font-medium opacity-80">{errorMsg}</p>
              </>
            )}
            <button
              onClick={() => setToast(null)}
              className="mt-4 px-8 py-3 rounded-full border-2 border-current font-semibold text-sm hover:opacity-70 transition"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot — hidden from real users, bots will fill it */}
      <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="label-text text-[#0D0D0D]">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="bg-white border border-[#d6d1c8] rounded-lg px-4 py-3 text-[#0D0D0D] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#FFCE00] transition"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="label-text text-[#0D0D0D]">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="250-555-0100"
            className="bg-white border border-[#d6d1c8] rounded-lg px-4 py-3 text-[#0D0D0D] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#FFCE00] transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="label-text text-[#0D0D0D]">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="bg-white border border-[#d6d1c8] rounded-lg px-4 py-3 text-[#0D0D0D] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#FFCE00] transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="label-text text-[#0D0D0D]">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          className="bg-white border border-[#d6d1c8] rounded-lg px-4 py-3 text-[#0D0D0D] focus:outline-none focus:ring-2 focus:ring-[#FFCE00] transition appearance-none"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="label-text text-[#0D0D0D]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your dock location, what needs doing, and when works best..."
          className="bg-white border border-[#d6d1c8] rounded-lg px-4 py-3 text-[#0D0D0D] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#FFCE00] transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#0D0D0D] text-[#F5F3EE] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#0D0D0D]/80 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

    </form>
    </>
  );
}
