"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// Droplets: fixed positions along the spray line
const droplets = [
  { top: "8%",  dx: 28, dy: -18, size: 4, delay: 0.0 },
  { top: "14%", dx: -22, dy: -10, size: 3, delay: 0.08 },
  { top: "22%", dx: 32, dy: 8,  size: 5, delay: 0.15 },
  { top: "30%", dx: -26, dy: 14, size: 3, delay: 0.05 },
  { top: "38%", dx: 20,  dy: -20, size: 4, delay: 0.22 },
  { top: "46%", dx: -30, dy: -6, size: 6, delay: 0.1  },
  { top: "54%", dx: 24,  dy: 20, size: 3, delay: 0.18 },
  { top: "62%", dx: -18, dy: 10, size: 5, delay: 0.03 },
  { top: "70%", dx: 30,  dy: -12, size: 4, delay: 0.25 },
  { top: "78%", dx: -24, dy: -18, size: 3, delay: 0.12 },
  { top: "85%", dx: 22,  dy: 16, size: 5, delay: 0.07 },
  { top: "92%", dx: -28, dy: 6,  size: 4, delay: 0.2  },
];

export default function PressureWashScroll() {
  const ref = useRef<HTMLDivElement>(null);

  // 200vh container — sticky inner stays visible for 1 full viewport of scroll travel
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Dirty overlay clips from left: inset(0 0 0 X%) where X goes 0→100
  const overlayClipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 0 0 0%)", "inset(0 0 0 100%)"]
  );

  // Spray beam left position
  const sprayLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Spray fades in at start, out at end
  const sprayOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.94, 1],
    [0, 1, 1, 0]
  );

  // Clean content fades in as spray reveals it
  const cleanOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── CLEAN LAYER (revealed underneath) ── */}
        <div className="absolute inset-0 bg-[#F5F3EE] flex items-center">
          <motion.div
            style={{ opacity: cleanOpacity }}
            className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full"
          >
            <p className="label-text text-[#1A1A1A] mb-4">The Barge Bros Difference</p>
            <h2 className="font-heading text-[clamp(52px,7vw,96px)] text-[#0D0D0D] leading-tight max-w-3xl mb-6">
              ONE MORNING.<br />YOUR DOCK TRANSFORMED.
            </h2>
            <p className="text-[#888888] text-lg max-w-lg leading-relaxed mb-10">
              We arrive by water, pressure wash years of buildup, repair what needs fixing,
              and leave before lunch. No trucks on your lawn. No waiting.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-[#0D0D0D] text-[#F5F3EE] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#1A1A1A] hover:scale-[1.03] transition-all duration-200"
            >
              Book a Visit
            </Link>
          </motion.div>
        </div>

        {/* ── DIRTY OVERLAY (clips away left → right as you scroll) ── */}
        <motion.div
          className="absolute inset-0 bg-[#0D0D0D] flex items-center"
          style={{ clipPath: overlayClipPath }}
        >
          {/* Subtle noise texture via repeating gradient */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
            }}
          />
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full relative z-10">
            <p className="label-text text-[#F5F3EE]/30 mb-4">Before</p>
            <h2 className="font-heading text-[clamp(52px,7vw,96px)] text-[#F5F3EE]/20 leading-tight max-w-3xl mb-6">
              ALGAE.<br />GRIME. GEESE.
            </h2>
            <p className="text-[#F5F3EE]/20 text-lg max-w-lg leading-relaxed">
              Neglected for seasons. No one could reach it.
            </p>
          </div>
        </motion.div>

        {/* ── SPRAY BEAM ── */}
        <motion.div
          className="absolute top-0 bottom-0 pointer-events-none z-20"
          style={{ left: sprayLeft, opacity: sprayOpacity, x: "-50%", width: "72px" }}
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(200,230,255,0.25) 0%, transparent 70%)",
              filter: "blur(6px)",
            }}
          />
          {/* Core beam */}
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 10%, rgba(200,230,255,1) 50%, rgba(255,255,255,0.9) 90%, transparent)",
              boxShadow: "0 0 12px 4px rgba(200,230,255,0.6), 0 0 24px 8px rgba(180,210,255,0.3)",
            }}
          />

          {/* Water droplets */}
          {droplets.map((d, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/70"
              style={{
                top: d.top,
                left: "50%",
                width: d.size,
                height: d.size,
                marginLeft: -d.size / 2,
                animation: `dropletFly 0.55s ease-out ${d.delay}s infinite`,
                // CSS custom properties for direction
                ["--droplet-dx" as string]: `${d.dx}px`,
                ["--droplet-dy" as string]: `${d.dy}px`,
              }}
            />
          ))}
        </motion.div>

        {/* Thin vertical separator at spray edge (crisp line) */}
        <motion.div
          className="absolute top-0 bottom-0 w-px bg-white/20 pointer-events-none z-20"
          style={{ left: sprayLeft, opacity: sprayOpacity }}
        />

        {/* Progress bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 z-30">
          <motion.div
            className="h-full bg-[#FFCE00]/40"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </div>
  );
}
