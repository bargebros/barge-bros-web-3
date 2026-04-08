"use client";

import { FadeUp, StaggerChildren, fadeUpItem } from "@/components/FadeUp";
import { motion } from "framer-motion";
import { CalendarDays, Sunset, Smile } from "lucide-react";

const cards = [
  {
    icon: CalendarDays,
    title: "Away all week? No problem.",
    description:
      "We work around your schedule \u2014 whether that\u2019s weekly, monthly, or just before you arrive for the season.",
  },
  {
    icon: Sunset,
    title: "Pull up on a Friday. Relax by Saturday.",
    description:
      "No to-do list waiting for you. Your dock is solid, your shoreline is clear, and the weekend is yours.",
  },
  {
    icon: Smile,
    title: "One less thing on your plate.",
    description:
      "We arrive by barge \u2014 directly to your dock from the water. No land access needed, no excuses. If other crews can\u2019t reach it, we can.",
  },
];

export default function OkanaganHomeowners() {
  return (
    <section className="bg-[#0D0D0D] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <FadeUp>
            <p className="label-text text-[#FFCE00] mb-3">Who This Is For</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-heading text-[clamp(48px,6vw,72px)] text-[#F5F3EE] leading-tight">
              YOUR DOCK SHOULD BE<br />A HIGHLIGHT, NOT A HEADACHE
            </h2>
          </FadeUp>
        </div>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUpItem}
              className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 flex flex-col gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFCE00] flex items-center justify-center shrink-0">
                <card.icon size={22} className="text-[#0D0D0D]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-[#F5F3EE] mb-3">{card.title}</h3>
                <p className="text-[#F5F3EE]/60 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
