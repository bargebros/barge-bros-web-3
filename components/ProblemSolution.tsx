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
              <p className="label-text text-[#FFCE00] mb-4">Who We Are</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-heading text-[clamp(48px,6vw,72px)] text-[#F5F3EE] leading-tight mb-6">
                BUILT FOR OKANAGAN LAKEFRONT OWNERS
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#F5F3EE]/70 text-lg leading-relaxed">
                Barge Bros was built for Okanagan property owners who want to
                spend their time on the water &mdash; not maintaining it. We take care of
                your dock, shoreline, and waterfront on whatever schedule fits your life,
                so showing up always feels like a holiday, not a chore.
              </p>
            </FadeUp>
          </div>

          {/* Right */}
          <div>
            <FadeUp delay={0.15}>
              <p className="label-text text-[#FFCE00] mb-4">The Idea</p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <h2 className="font-heading text-[clamp(48px,6vw,72px)] text-[#FFCE00] leading-tight mb-6">
                ENJOY THE LAKE
              </h2>
            </FadeUp>
            <FadeUp delay={0.35}>
              <p className="text-[#F5F3EE]/70 text-lg leading-relaxed">
                You didn&rsquo;t buy lakefront to spend your weekends scrubbing, fixing,
                and hauling. We take that off your plate entirely &mdash; so when you
                get there, you can actually be there.
              </p>
            </FadeUp>
            <FadeUp delay={0.45}>
              <div className="mt-8 pl-6 border-l-2 border-[#FFCE00]">
                <p className="text-[#F5F3EE] text-xl font-semibold italic">
                  &ldquo;Your lakefront should be something you enjoy, not something you worry about.&rdquo;
                </p>
                <p className="text-[#888888] mt-2 label-text">Ruah &amp; Jace, Barge Bros</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
