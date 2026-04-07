"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { FadeUp } from "@/components/FadeUp";

const stats = [
  { value: 200, suffix: "+", label: "Docks Cleaned" },
  { value: 5, suffix: "", label: "Years on the Water" },
  { value: 5, suffix: "★", label: "Star Rated" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-heading text-[clamp(56px,8vw,96px)] text-[#FFCE00] leading-none">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#0D0D0D] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <FadeUp className="text-center mb-16">
          <p className="label-text text-[#FFCE00] mb-3">By the Numbers</p>
          <h2 className="font-heading text-[clamp(40px,5vw,64px)] text-[#F5F3EE]">
            BUILT ON THE OKANAGAN
          </h2>
        </FadeUp>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.1} className="flex flex-col items-center text-center gap-2">
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="label-text text-[#888888]">{stat.label}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
