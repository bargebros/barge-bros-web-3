"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PressureWashGSAP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanLayerRef = useRef<HTMLDivElement>(null);
  const sprayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=130%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Wipe the clean layer in from left to right
      tl.fromTo(
        cleanLayerRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", ease: "none", duration: 1 }
      );

      // Spray beam tracks the leading edge of the wipe
      tl.fromTo(
        sprayRef.current,
        { left: "0%", opacity: 1 },
        { left: "100%", opacity: 1, ease: "none", duration: 1 },
        "<"
      );
    },
    { scope: containerRef }
  );

  return (
    <div className="relative">
      {/* ── HEADLINE ABOVE THE PINNED SECTION ── */}
      <div className="bg-[#0D0D0D] pt-20 pb-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="label-text text-[#FFCE00] mb-3">The Barge Bros Difference</p>
          <h2 className="font-heading text-[clamp(48px,7vw,88px)] text-[#F5F3EE] leading-tight">
            Watch the difference
          </h2>
        </div>
      </div>

      {/* ── PINNED SCROLL SECTION ── */}
      <div ref={containerRef} className="relative h-[75vh] min-h-[480px] w-full overflow-hidden will-change-transform">

        {/* BEFORE — dirty dock */}
        <div className="absolute inset-0">
          <Image
            src="/dock-before.jpg"
            alt="Dock before pressure washing"
            fill
            className="object-cover"
            onError={() => {}} // silently fail until image is added
          />
          {/* Fallback when no image: dark textured bg */}
          <div className="absolute inset-0 bg-[#0D0D0D]" style={{ zIndex: -1 }} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-heading text-[#F5F3EE]/8 text-[clamp(40px,8vw,96px)] tracking-widest select-none">
              BEFORE
            </span>
          </div>
          {/* Dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-[#0D0D0D]/20" />
        </div>

        {/* AFTER — clean dock */}
        <div
          ref={cleanLayerRef}
          className="absolute inset-0"
          style={{ clipPath: "inset(0 100% 0 0)" }}
        >
          <Image
            src="/dock-after.jpg"
            alt="Dock after pressure washing"
            fill
            className="object-cover"
            onError={() => {}}
          />
          {/* Fallback */}
          <div className="absolute inset-0 bg-[#F5F3EE]" style={{ zIndex: -1 }} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-heading text-[#0D0D0D]/8 text-[clamp(40px,8vw,96px)] tracking-widest select-none">
              AFTER
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F3EE]/40 via-transparent to-transparent" />
        </div>

        {/* ── SPRAY BEAM ── */}
        <div
          ref={sprayRef}
          className="absolute top-0 bottom-0 pointer-events-none z-20"
          style={{ left: "0%", width: "88px", transform: "translateX(-50%)", opacity: 0 }}
        >
          {/* Wide soft glow */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(220,240,255,0.3) 0%, transparent 70%)",
              filter: "blur(10px)",
            }}
          />
          {/* Core beam */}
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px]"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.9) 6%, rgba(230,245,255,1) 50%, rgba(255,255,255,0.9) 94%, transparent 100%)",
              boxShadow: "0 0 18px 7px rgba(220,240,255,0.65), 0 0 36px 14px rgba(200,230,255,0.3)",
            }}
          />
          {/* Spray droplets */}
          {[
            { top: "8%",  dx: 24, dy: -16, s: 4, delay: 0.0  },
            { top: "16%", dx: -20, dy: -10, s: 3, delay: 0.09 },
            { top: "25%", dx: 28, dy: 12,  s: 5, delay: 0.17 },
            { top: "34%", dx: -22, dy: 18, s: 3, delay: 0.04 },
            { top: "43%", dx: 20,  dy: -20, s: 4, delay: 0.22 },
            { top: "52%", dx: -28, dy: -6,  s: 5, delay: 0.11 },
            { top: "61%", dx: 24,  dy: 20,  s: 3, delay: 0.19 },
            { top: "70%", dx: -18, dy: 10,  s: 4, delay: 0.06 },
            { top: "79%", dx: 26,  dy: -12, s: 5, delay: 0.25 },
            { top: "88%", dx: -22, dy: 8,   s: 3, delay: 0.13 },
          ].map((d, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/70 left-1/2"
              style={{
                top: d.top,
                width: d.s,
                height: d.s,
                marginLeft: -d.s / 2,
                animation: `dropletFly 0.48s ease-out ${d.delay}s infinite`,
                ["--droplet-dx" as string]: `${d.dx}px`,
                ["--droplet-dy" as string]: `${d.dy}px`,
              }}
            />
          ))}
        </div>

        {/* Before/After labels */}
        <div className="absolute bottom-6 left-8 z-30">
          <span className="label-text text-[#F5F3EE]/50">Before</span>
        </div>
        <div className="absolute bottom-6 right-8 z-30">
          <span className="label-text text-[#0D0D0D]/50">After</span>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
          <p className="label-text text-[#F5F3EE]/30 animate-bounce mix-blend-difference">scroll</p>
        </div>
      </div>
    </div>
  );
}
