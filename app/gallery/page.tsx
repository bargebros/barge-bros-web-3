import { Metadata } from "next";
import { FadeUp } from "@/components/FadeUp";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Gallery | Barge Bros — Dock Work in the Okanagan",
  description:
    "See our dock cleaning, repair, and shoreline work across the Okanagan. Before and after photos of real jobs.",
};

// Placeholder gallery items — replace src values with real photos
const galleryItems = [
  { id: 1, label: "Dock Pressure Wash — Kelowna", tall: true },
  { id: 2, label: "Shoreline Cleanup — West Kelowna", tall: false },
  { id: 3, label: "Board Replacement — Peachland", tall: false },
  { id: 4, label: "Solar Light Install", tall: true },
  { id: 5, label: "Full Dock Restoration", tall: false },
  { id: 6, label: "Barge Delivery — Building Materials", tall: false },
  { id: 7, label: "Dock Staining — Kelowna", tall: true },
  { id: 8, label: "Beach Driftwood Removal", tall: false },
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
              Real jobs, real Okanagan docks. Add your photos once you have them.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Masonry grid (placeholder) */}
      <section className="bg-[#F5F3EE] py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, i) => (
              <FadeUp key={item.id} delay={i * 0.04}>
                <div
                  className={`break-inside-avoid rounded-xl overflow-hidden bg-[#0D0D0D]/5 border border-[#d6d1c8] ${
                    item.tall ? "aspect-[3/4]" : "aspect-video"
                  } relative group cursor-pointer`}
                >
                  {/* Placeholder — replace with <Image src={item.src} ... /> */}
                  <div className="absolute inset-0 bg-[#0D0D0D] flex items-center justify-center">
                    <span className="font-heading text-2xl text-[#F5F3EE]/20 text-center px-4">
                      PHOTO COMING
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0D0D0D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="label-text text-[#F5F3EE]">{item.label}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-16 text-center">
            <p className="text-[#888888] text-sm">
              Photos updated as jobs are completed. More coming soon.
            </p>
          </FadeUp>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
