"use client";

import { FadeUp } from "@/components/FadeUp";
import BeforeAfter from "@/components/BeforeAfter";

export default function BeforeAfterSection() {
  return (
    <section className="bg-[#F5F3EE] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="text-center mb-14">
          <FadeUp>
            <p className="label-text text-[#FFCE00] mb-3">The Transformation</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-heading text-[clamp(48px,6vw,72px)] text-[#0D0D0D] leading-tight">
              BEFORE & AFTER
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-4 text-[#0D0D0D]/60 text-lg max-w-xl mx-auto">
              Drag the slider to see the difference a Barge Bros refinish makes.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <BeforeAfter
              before="/images/dock-before.jpg"
              after="/images/dock-after.jpg"
              alt="Okanagan dock refinish"
              className="aspect-video"
            />
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
