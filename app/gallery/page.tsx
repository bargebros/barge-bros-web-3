import { Metadata } from "next";
import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import BeforeAfter from "@/components/BeforeAfter";

export const metadata: Metadata = {
  title: "Gallery | Barge Bros — Dock Work in the Okanagan",
  description:
    "See our dock cleaning, repair, and shoreline work across the Okanagan. Before and after photos of real jobs.",
};

const galleryItems = [
  { src: "/images/gallery-1.jpg", label: "Okanagan Dock", tall: true },
  { src: "/images/gallery-2.jpg", label: "Dock Work", tall: false },
  { src: "/images/gallery-3.jpg", label: "On the Water", tall: false },
  { src: "/images/gallery-4.jpg", label: "Sanding & Prep", tall: true },
  { src: "/images/sealing-staining.jpg", label: "Sealing & Staining", tall: false },
  { src: "/images/gallery-6.jpg", label: "Crew at Work", tall: false },
  { src: "/images/gallery-7.jpg", label: "Dock Restoration", tall: true },
  { src: "/images/gallery-8.jpg", label: "Finished Repairs", tall: false },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D0D0D] pt-36 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <p className="label-text text-[#FFCE00] mb-4">Our Work</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-heading text-[clamp(56px,7vw,88px)] text-[#F5F3EE] leading-tight max-w-2xl">
              RESULTS SPEAK FOR THEMSELVES.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#F5F3EE]/60 text-lg mt-6 max-w-xl leading-relaxed">
              Real jobs, real Okanagan docks. Drag the slider to see the transformation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Before / After sliders */}
      <section className="bg-[#0D0D0D] pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <p className="label-text text-[#FFCE00] mb-8">Before &amp; After</p>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeUp delay={0.1}>
              <BeforeAfter
                before="/images/before-7.jpg"
                after="/images/after-7.jpg"
                alt="Dock restoration"
              />
            </FadeUp>
            <FadeUp delay={0.2}>
              <BeforeAfter
                before="/images/gallery-before-2.jpg"
                after="/images/gallery-after-2.jpg"
                alt="Dock restoration"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-[#F5F3EE] py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <p className="label-text text-[#0D0D0D]/50 mb-8">On the Job</p>
          </FadeUp>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, i) => (
              <FadeUp key={i} delay={i * 0.04}>
                <div
                  className={`break-inside-avoid rounded-xl overflow-hidden ${
                    item.tall ? "aspect-[3/4]" : "aspect-video"
                  } relative group cursor-pointer`}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#0D0D0D]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="label-text text-[#F5F3EE]">{item.label}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
