"use client";

import { FadeUp, StaggerChildren, fadeUpItem } from "@/components/FadeUp";
import { motion } from "framer-motion";
import { CalendarCheck, Anchor, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Book Online or Call",
    description:
      "Get in touch by phone or through our contact form. We'll confirm your location, discuss your needs, and schedule the job.",
  },
  {
    icon: Anchor,
    number: "02",
    title: "We Arrive by Barge",
    description:
      "Our crew shows up directly at your dock, from the water. No need to clear a path, no land access required.",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Job Done, Dock Ready",
    description:
      "We complete the work, clean up every last bit of mess, and leave your dock safe and spotless — ready for the grandkids, the summer, or whenever you show up next.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F5F3EE] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <FadeUp>
            <p className="label-text text-[#FFCE00] mb-3">The Process</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-heading text-[clamp(48px,6vw,72px)] text-[#0D0D0D]">
              HOW IT WORKS
            </h2>
          </FadeUp>
        </div>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          staggerDelay={0.12}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUpItem}
              className="relative flex flex-col gap-5"
            >
              {/* Number + icon */}
              <div className="flex items-center gap-4">
                <span className="font-heading text-[64px] text-[#0D0D0D]/10 leading-none select-none">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-lg bg-[#0D0D0D] flex items-center justify-center shrink-0">
                  <step.icon size={20} className="text-[#FFCE00]" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0D0D0D] text-xl mb-3">{step.title}</h3>
                <p className="text-[#888888] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
