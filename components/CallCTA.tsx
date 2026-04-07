"use client";

import { FadeUp } from "@/components/FadeUp";
import { Phone } from "lucide-react";

export default function CallCTA() {
  return (
    <section className="bg-[#0D0D0D] py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <FadeUp>
              <h2 className="font-heading text-[clamp(40px,5vw,64px)] text-[#F5F3EE] leading-tight">
                GOT A DOCK?<br />
                <span className="text-[#FFCE00]">WE&rsquo;VE GOT YOU COVERED</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-[#F5F3EE]/50 mt-3 text-base max-w-sm leading-relaxed">
                Call us and we&rsquo;ll sort it out.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <a
              href="tel:7788059888"
              className="flex items-center gap-3 bg-[#FFCE00] text-[#0D0D0D] px-10 py-5 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:scale-[1.03] transition-all duration-200 shadow-xl whitespace-nowrap"
            >
              <Phone size={20} />
              778-805-9888
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
