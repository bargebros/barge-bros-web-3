"use client";

import { Droplets, Trash2, Hammer, Zap, Sofa, Package } from "lucide-react";
import { FadeUp, StaggerChildren, fadeUpItem } from "@/components/FadeUp";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    icon: Droplets,
    title: "Pressure Washing",
    description:
      "Arrive to a spotless dock. We handle the algae, grime, and buildup so you don\u2019t have to think about it.",
  },
  {
    icon: Trash2,
    title: "Shoreline Cleanup",
    description:
      "A clean shoreline you\u2019re proud of. Driftwood, debris, and buildup cleared so your property always looks its best.",
  },
  {
    icon: Hammer,
    title: "Waterfront Repairs",
    description:
      "A safe dock for your family. We check for loose boards, popped nails, and worn hardware before someone gets hurt.",
  },
  {
    icon: Zap,
    title: "Solar Light Installation",
    description:
      "Light up your evenings. Solar dock lights installed so your waterfront looks great day and night.",
  },
  {
    icon: Sofa,
    title: "Sanding & Sealing",
    description:
      "We sand your dock down to bare wood — removing slivers, rough patches, and years of wear — then seal it so it\u2019s smooth, protected, and ready for bare feet.",
  },
  {
    icon: Package,
    title: "Material Delivery",
    description:
      "Need supplies at your waterfront? We bring everything directly to you \u2014 no hauling required.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F5F3EE] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <FadeUp>
              <p className="label-text text-[#888888] mb-3">What We Do</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-heading text-[clamp(48px,6vw,72px)] text-[#0D0D0D] leading-tight">
                OUR SERVICES
              </h2>
            </FadeUp>
          </div>
        </div>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUpItem}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
