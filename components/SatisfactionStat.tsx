"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function SatisfactionStat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView || done) return;

    const duration = 1000;
    const steps = 60;
    const increment = 100 / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out: slows at the end
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * 100);

      setCount(current);

      if (step >= steps) {
        clearInterval(timer);
        setCount(100);
        setDone(true);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, done]);

  return (
    <section className="bg-[#0D0D0D] py-20 lg:py-28 overflow-hidden">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16">
          {/* Big number */}
          <div
            className="shrink-0"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <span className="font-heading text-[clamp(80px,14vw,160px)] text-[#FFCE00] leading-none tabular-nums">
              {count}%
            </span>
          </div>

          {/* Text */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <p className="font-heading text-[clamp(32px,4vw,56px)] text-[#F5F3EE] leading-tight">
              SATISFACTION<br />GUARANTEED.
            </p>
            <p className="text-[#888888] mt-4 text-base leading-relaxed max-w-sm">
              We don&rsquo;t leave until the job is done right. Every time, on every dock.
            </p>
          </div>

          {/* Thin rule */}
          <div
            className="hidden lg:block h-px flex-1 bg-white/5"
            style={{
              opacity: inView ? 1 : 0,
              transition: "opacity 0.8s ease 0.4s",
            }}
          />
        </div>
      </div>
    </section>
  );
}
