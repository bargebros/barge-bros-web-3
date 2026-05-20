"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";


export default function PressureWashScroll() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Before overlay clips from left → right as you scroll
  const overlayClipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 0 0 0%)", "inset(0 0 0 100%)"]
  );

  // Spray beam tracks the clip edge
  const sprayLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const sprayOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.94, 1],
    [0, 1, 1, 0]
  );

  // CTA fades in once the after is mostly revealed
  const ctaOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.7, 0.9], [30, 0]);

  // Labels
  const beforeLabelOpacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [1, 1, 0, 0]);
  const afterLabelOpacity  = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── AFTER photo (base layer) ── */}
        <div className="absolute inset-0">
          <Image
            src="/images/dock-after.jpg"
            alt="Dock after restoration"
            fill
            className="object-cover"
            style={{ objectPosition: "65% center" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/30" />
        </div>

        {/* After label */}
        <motion.div
          className="absolute bottom-10 right-8 lg:right-12 z-10 pointer-events-none"
          style={{ opacity: afterLabelOpacity }}
        >
          <span className="label-text bg-[#FFCE00] text-[#0D0D0D] px-3 py-1.5 rounded-full">After</span>
        </motion.div>

        {/* CTA overlay on after side */}
        <motion.div
          className="absolute bottom-16 left-8 lg:left-16 z-10"
          style={{ opacity: ctaOpacity, y: ctaY }}
        >
          <p className="label-text text-[#FFCE00] mb-2">The Result</p>
          <h2 className="font-heading text-[clamp(36px,5vw,64px)] text-[#F5F3EE] leading-tight mb-6">
            WE DO THE WORK.<br />YOU ENJOY THE LAKE.
          </h2>
          <Link
            href="/contact"
            className="inline-flex bg-[#FFCE00] text-[#0D0D0D] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-yellow-300 hover:scale-[1.03] transition-all duration-200"
          >
            Book a Visit
          </Link>
        </motion.div>

        {/* ── BEFORE photo (clips away left → right) ── */}
        <motion.div
          className="absolute inset-0"
          style={{ clipPath: overlayClipPath }}
        >
          <Image
            src="/images/dock-before.jpg"
            alt="Dock before restoration"
            fill
            className="object-cover"
            style={{ objectPosition: "65% center" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/20" />
        </motion.div>

        {/* Before label */}
        <motion.div
          className="absolute bottom-10 left-8 lg:left-12 z-10 pointer-events-none"
          style={{ opacity: beforeLabelOpacity }}
        >
          <span className="label-text bg-[#0D0D0D]/70 text-[#F5F3EE] px-3 py-1.5 rounded-full">Before</span>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="absolute top-0 bottom-0 pointer-events-none z-20"
          style={{ left: sprayLeft, opacity: sprayOpacity, x: "-50%", width: "3px" }}
        >
          {/* Beam — top half (ends before barge) */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: 0,
              bottom: "calc(50% + 32px)",
              background: "linear-gradient(to bottom, transparent, #FFCE00 8%, #FFCE00)",
              boxShadow: "0 0 10px 3px rgba(255,206,0,0.35), 0 0 28px 6px rgba(255,206,0,0.15)",
            }}
          />
          {/* Beam — bottom half (starts after barge) */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: "calc(50% + 32px)",
              bottom: 0,
              background: "linear-gradient(to bottom, #FFCE00, #FFCE00 92%, transparent)",
              boxShadow: "0 0 10px 3px rgba(255,206,0,0.35), 0 0 28px 6px rgba(255,206,0,0.15)",
            }}
          />
          {/* Barge icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg width="72" height="44" viewBox="0 0 72 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Hull */}
              <path d="M6 24 L66 24 L70 32 L2 32 Q1 32 1 30 L1 26 Q1 24 3 24 Z" fill="#FFCE00"/>
              {/* Cabin */}
              <rect x="18" y="14" width="30" height="10" rx="3" fill="#FFCE00"/>
              {/* Wheelhouse */}
              <rect x="38" y="8" width="14" height="6" rx="2" fill="#FFCE00"/>
              {/* Bow cleat */}
              <rect x="7" y="17" width="7" height="7" rx="1.5" fill="#FFCE00"/>
              {/* Water */}
              <path d="M0 36 Q9 33 18 36 Q27 39 36 36 Q45 33 54 36 Q63 39 72 36" stroke="#FFCE00" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M4 42 Q13 39 22 42 Q31 45 40 42 Q49 39 58 42 Q67 45 72 42" stroke="#FFCE00" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
            </svg>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 z-30">
          <motion.div
            className="h-full bg-white/20"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </div>
  );
}
