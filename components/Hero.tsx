"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const headline = ["BARGE BROS", "LAKEFRONT DONE RIGHT"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Deep cinematic parallax — bg moves at ~60% of scroll speed
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  // Subtle scale: starts slightly zoomed in, relaxes as you scroll
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);
  // Content fades out as you scroll away
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.7], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] flex items-end overflow-hidden">

      {/* ── BACKGROUND with deep parallax ── */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 -top-[15%] -bottom-[15%] origin-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D]" />
        {/* Cinematic bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
        {/* Subtle top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/30 via-transparent to-transparent" />
      </motion.div>

      {/* ── NOISE TEXTURE — grain overlay for premium feel ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.032]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── LOGO WATERMARK ── */}
      <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.035] z-[1] select-none">
        <Image src="/images/Logo with no text.png" alt="" width={560} height={560} className="w-[min(560px,65vw)]" aria-hidden />
      </div>

      {/* ── CONTENT ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 lg:pb-28 w-full"
      >
        <div className="max-w-4xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="label-text text-[#FFCE00] mb-6"
          >
            Kelowna, BC · Okanagan Lake
          </motion.p>

          {/* Headline — line by line */}
          <div className="overflow-hidden">
            {headline.map((line, i) => (
              <motion.h1
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                className="font-heading text-[clamp(64px,10vw,120px)] leading-[0.9] text-[#F5F3EE] block"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72 }}
            className="mt-6 text-[#F5F3EE]/65 text-base lg:text-lg max-w-xl leading-relaxed"
          >
            Whether you&rsquo;re away all week or gone for months, you should be able to pull up to your property and find it exactly how you left it &mdash; or better. No scrubbing, no loose boards, no surprises. Just the lake.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="bg-[#FFCE00] text-[#0D0D0D] px-8 py-4 rounded-full font-semibold text-base hover:bg-yellow-300 hover:scale-[1.03] transition-all duration-200 shadow-lg"
              >
                Get a Free Quote
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/services"
                className="border border-[#F5F3EE]/30 text-[#F5F3EE] px-8 py-4 rounded-full font-semibold text-base hover:border-[#F5F3EE]/60 hover:bg-white/5 transition-all duration-200"
              >
                Our Services
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 lg:right-10 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={18} className="text-[#F5F3EE]/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
