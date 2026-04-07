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
    title: "Dock & Lift Pressure Washing",
    description:
      "Years of algae, grime, and buildup don't stand a chance. Our high-powered pressure wash restores your dock surface to like-new condition — safely and thoroughly. We handle composite, wood, and aluminum docks.",
    detail: "Most jobs completed in 2–4 hours.",
  },
  {
    icon: Trash2,
    title: "Shoreline & Beach Cleanup",
    description:
      "Driftwood, debris, geese mess, dead vegetation — we clear it all. We work your full shoreline efficiently without damaging your landscaping or lawn.",
    detail: "Available as a standalone service or add-on.",
  },
  {
    icon: Hammer,
    title: "Dock Maintenance",
    description:
      "Sanding, sealing, staining, and general upkeep to keep your dock in great shape season after season. We assess what actually needs doing and give you honest recommendations.",
    detail: "We use premium marine-grade sealants and stains.",
  },
  {
    icon: Zap,
    title: "Dock Ladder & Solar Light Installation",
    description:
      "Safe, properly anchored ladder installation and clean solar light placement. We make sure everything is secure, level, and built to last through Okanagan winters.",
    detail: "No electrician required — all solar.",
  },
  {
    icon: Sofa,
    title: "Waterfront Furniture Setup",
    description:
      "We bring your dock and waterfront furniture out of storage, place it to your spec, and leave everything ready for the season. Start summer right.",
    detail: "Spring setup and fall takedown available.",
  },
  {
    icon: Package,
    title: "Barge Material Delivery",
    description:
      "Need lumber, stone, landscaping material, or equipment delivered to your lakefront property where no truck can reach? We load it on the barge and bring it directly to you.",
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
              LAKEFRONT SERVICES, DONE RIGHT
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#F5F3EE]/60 text-lg mt-6 max-w-xl leading-relaxed">
              We get to your waterfront however it takes — and leave it clean, safe, and ready.
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
