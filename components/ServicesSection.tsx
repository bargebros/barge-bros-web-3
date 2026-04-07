"use client";

import { Droplets, Trash2, Hammer, Zap, Sofa, Package } from "lucide-react";
import { FadeUp, StaggerChildren, fadeUpItem } from "@/components/FadeUp";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    icon: Droplets,
    title: "Dock & Lift Pressure Washing",
    description:
      "High-powered wash to blast away algae, grime, geese mess, and years of buildup — leaving your dock safe, clean, and ready for the family.",
  },
  {
    icon: Trash2,
    title: "Shoreline & Beach Cleanup",
    description:
      "Driftwood removal, debris clearing, and shoreline restoration. We leave your waterfront pristine.",
  },
  {
    icon: Hammer,
    title: "Dock Maintenance",
    description:
      "Sanding, sealing, staining, and general upkeep to keep your dock in great shape season after season.",
  },
  {
    icon: Zap,
    title: "Dock Ladder & Solar Light Installation",
    description:
      "Safe, clean installations for dock ladders and solar lighting — no electrician required.",
  },
  {
    icon: Sofa,
    title: "Waterfront Furniture Setup",
    description:
      "Heading up for the season or want everything ready before you arrive? We set up your dock and waterfront furniture so it&rsquo;s good to go from day one.",
  },
  {
    icon: Package,
    title: "Barge Material Delivery",
    description:
      "Need materials delivered directly to your lakefront property? We bring it by barge, no land access required.",
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
                LAKEFRONT SERVICES<br />FROM THE WATER
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
