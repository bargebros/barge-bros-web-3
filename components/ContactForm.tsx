"use client";

import { useState } from "react";

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
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

      {status === "success" && (
        <p className="text-green-700 text-sm font-medium">
          Thanks! We&rsquo;ll be in touch within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm font-medium">
          Something went wrong. Please try calling us directly at 778-805-9888.
        </p>
      )}
    </form>
  );
}
