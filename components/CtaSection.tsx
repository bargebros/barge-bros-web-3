"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";
import { Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-[#FFCE00] py-24 lg:py-32 relative overflow-hidden">
      {/* Logo stamp — bottom right, large, low opacity. White bg blends with yellow bg here */}
      <div className="absolute -right-12 -bottom-12 pointer-events-none opacity-[0.12] select-none">
        <Image
          src="/logo.png"
          alt=""
          width={360}
          height={360}
          aria-hidden
        />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center relative z-10">
        <FadeUp>
          <p className="label-text text-[#0D0D0D]/60 mb-4">Ready to Book?</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-heading text-[clamp(56px,8vw,112px)] text-[#0D0D0D] leading-none mb-4">
            LET&rsquo;S MAKE IT<br />EASY FOR YOU
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-[#0D0D0D]/70 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Give us a call or send a message. We&rsquo;ll figure out what your property needs and handle it from there.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:7788059888"
              className="flex items-center gap-3 bg-[#0D0D0D] text-[#F5F3EE] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#0D0D0D]/80 hover:scale-[1.03] transition-all duration-200 shadow-xl"
            >
              <Phone size={20} />
              778-805-9888
            </a>
            <Link
              href="/contact"
              className="border-2 border-[#0D0D0D] text-[#0D0D0D] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#0D0D0D] hover:text-[#F5F3EE] transition-all duration-200"
            >
              Get a Free Quote
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
