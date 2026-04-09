"use client";

import { FadeUp, StaggerChildren, fadeUpItem } from "@/components/FadeUp";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We've had our dock for 15 years and never been able to get someone out to properly clean it — there's no road access. Barge Bros showed up by water and had it spotless in two hours. Unreal service.",
    name: "David M.",
    location: "Kelowna, BC",
  },
  {
    quote:
      "Ruah and Jace are exactly what you want in a local tradesman. They showed up on time, did quality work, and didn't leave until everything was perfect. The dock hasn't looked this good since we built it.",
    name: "Sandra K.",
    location: "West Kelowna, BC",
  },
  {
    quote:
      "Had them do a full board replacement and seal on our dock. The barge access meant no damage to our lawn or garden — huge deal for us. Highly recommend to any Okanagan lakefront owner.",
    name: "Greg T.",
    location: "Peachland, BC",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0D0D0D] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <FadeUp>
            <p className="label-text text-[#FFCE00] mb-3">What Clients Say</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-heading text-[clamp(48px,6vw,72px)] text-[#F5F3EE]">
              STRAIGHT FROM THE DOCK
            </h2>
          </FadeUp>
        </div>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className="bg-[#1A1A1A]/20 border border-[#1A1A1A]/30 rounded-xl p-8 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-[#FFCE00] fill-[#FFCE00]" />
                ))}
              </div>
              <p className="text-[#F5F3EE]/80 leading-relaxed text-[15px] flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-[#F5F3EE]">{t.name}</p>
                <p className="label-text text-[#888888] mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
