"use client";

import { FadeUp } from "@/components/FadeUp";

export default function ProblemSolution() {
  return (
    <section className="bg-[#0D0D0D] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <FadeUp>
              <p className="label-text text-[#FFCE00] mb-4">The Problem</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-heading text-[clamp(48px,6vw,72px)] text-[#F5F3EE] leading-tight mb-6">
                MOST COMPANIES CAN&rsquo;T REACH YOUR DOCK
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#F5F3EE]/70 text-lg leading-relaxed">
                Overgrown banks, no road access, steep terrain — most service crews
                simply can&rsquo;t get to lakefront docks. So they don&rsquo;t. Your dock goes
                unmaintained, repairs get skipped, and small problems become expensive ones.
              </p>
            </FadeUp>
          </div>

          {/* Right */}
          <div>
            <FadeUp delay={0.15}>
              <p className="label-text text-[#FFCE00] mb-4">The Solution</p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <h2 className="font-heading text-[clamp(48px,6vw,72px)] text-[#FFCE00] leading-tight mb-6">
                WE CAN.
              </h2>
            </FadeUp>
            <FadeUp delay={0.35}>
              <p className="text-[#F5F3EE]/70 text-lg leading-relaxed">
                We arrive directly at your dock from the water — no land access needed,
                no excuses. Whether you need us while you&rsquo;re away for the season or
                want the dock spotless before the grandkids arrive, we&rsquo;ve got it handled.
              </p>
            </FadeUp>
            <FadeUp delay={0.45}>
              <div className="mt-8 pl-6 border-l-2 border-[#FFCE00]">
                <p className="text-[#F5F3EE] text-xl font-semibold italic">
                  &ldquo;If other companies can&rsquo;t reach it — we can.&rdquo;
                </p>
                <p className="text-[#888888] mt-2 label-text">Ruah & Jace, Barge Bros</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
