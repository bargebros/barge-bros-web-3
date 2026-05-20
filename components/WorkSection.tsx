"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/FadeUp";

const photos = [
  { src: "/images/work-1.jpg", label: "Barge Setup" },
  { src: "/images/work-2.jpg", label: "Pressure Washing" },
  { src: "/images/work-3.jpg", label: "Sanding & Prep" },
  { src: "/images/work-4.jpg", label: "The Transformation" },
];

export default function WorkSection() {
  return (
    <section className="bg-[#0D0D0D] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <FadeUp>
              <p className="label-text text-[#FFCE00] mb-3">On the Job</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-heading text-[clamp(48px,6vw,72px)] text-[#F5F3EE] leading-tight">
                REAL OKANAGAN DOCKS
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/gallery"
              className="label-text text-[#FFCE00] hover:text-yellow-300 transition-colors underline underline-offset-4 shrink-0"
            >
              See All Photos →
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <FadeUp key={photo.src} delay={i * 0.06}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#0D0D0D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="label-text text-[#F5F3EE] text-sm">{photo.label}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
