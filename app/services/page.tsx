import { Metadata } from "next";
import { Droplets, Trash2, Hammer, Zap, Sofa, Package } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Barge Bros Dock & Lakefront Services Okanagan",
  description:
    "Dock pressure washing, shoreline cleanup, dock maintenance, solar lights, furniture setup, and material delivery across Okanagan Lake.",
};

const services = [
  {
    icon: Droplets,
    title: "Pressure Washing",
    description:
      "Arrive to a spotless dock. We handle the algae, grime, and buildup so you don\u2019t have to think about it. Composite, wood, and aluminum docks all done thoroughly and safely.",
    detail: "Most jobs completed in 2\u20134 hours.",
  },
  {
    icon: Trash2,
    title: "Shoreline Cleanup",
    description:
      "A clean shoreline you\u2019re proud of. Driftwood, debris, and buildup cleared without touching your landscaping or lawn. Your property always looks its best.",
    detail: "Available as a standalone service or add-on.",
  },
  {
    icon: Hammer,
    title: "Waterfront Repairs",
    description:
      "A safe dock for your family. We check for loose boards, popped nails, and worn hardware before someone gets hurt \u2014 and replace rotted or damaged boards before they become a real problem.",
    detail: "Honest assessment, no unnecessary upselling.",
  },
  {
    icon: Zap,
    title: "Solar Light Installation",
    description:
      "Light up your evenings. Solar dock lights installed so your waterfront looks great day and night. Everything anchored securely and built to handle Okanagan winters.",
    detail: "No electrician required \u2014 all solar.",
  },
  {
    icon: Sofa,
    title: "Waterfront Sanding & Sealing",
    description: "We sand your dock down to bare wood — removing slivers, rough patches, and years of wear — then seal it with premium marine-grade products so it\u2019s smooth, protected, and ready for bare feet all summer.",
    detail: "Spring setup and fall takedown available.",
  },
  {
    icon: Package,
    title: "Material Delivery",
    description:
      "Need supplies at your waterfront? Lumber, stone, landscaping material, equipment \u2014 we bring everything directly to you. No hauling required.",
    detail: "Contact us for delivery capacity and pricing.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D0D0D] pt-36 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <p className="label-text text-[#FFCE00] mb-4">What We Offer</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-heading text-[clamp(56px,8vw,96px)] text-[#F5F3EE] leading-tight max-w-3xl">
              EVERYTHING YOUR DOCK NEEDS
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#F5F3EE]/60 text-lg mt-6 max-w-xl leading-relaxed">
              We take care of the upkeep so every time you arrive, your waterfront is clean, safe, and ready to enjoy.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services — alternating layout */}
      <section className="bg-[#F5F3EE] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={0.05}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-0 py-16 lg:py-20 border-b border-[#d6d1c8] last:border-0`}
              >
                {/* Icon block */}
                <div className="lg:w-1/3 flex items-start gap-4 mb-8 lg:mb-0">
                  <div className="w-14 h-14 rounded-xl bg-[#0D0D0D] flex items-center justify-center shrink-0">
                    <service.icon size={24} className="text-[#FFCE00]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-heading text-[32px] text-[#0D0D0D] leading-tight">
                      {service.title}
                    </p>
                    <p className="label-text text-[#888888] mt-2">{service.detail}</p>
                  </div>
                </div>

                {/* Description */}
                <div className={`lg:w-2/3 ${i % 2 === 0 ? "lg:pl-20" : "lg:pr-20"}`}>
                  <p className="text-[#0D0D0D]/70 text-lg leading-relaxed">{service.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
