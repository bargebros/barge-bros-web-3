"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover="hovered"
      initial="rest"
      animate="rest"
      className="relative bg-[#F5F3EE] rounded-xl p-8 flex flex-col gap-4 cursor-default overflow-hidden"
      variants={{
        rest: { y: 0, boxShadow: "0 0px 0px rgba(10,22,40,0)" },
        hovered: { y: -6, boxShadow: "0 20px 40px rgba(10,22,40,0.13)" },
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={{
          rest: { x: "-110%", opacity: 0 },
          hovered: { x: "110%", opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,206,0,0.12) 50%, transparent 60%)",
        }}
      />

      {/* Icon — bg flips to yellow on hover */}
      <motion.div
        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
        variants={{
          rest: { backgroundColor: "#0D0D0D" },
          hovered: { backgroundColor: "#FFCE00" },
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          variants={{
            rest: { color: "#FFCE00" },
            hovered: { color: "#0D0D0D" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Icon size={22} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      <h3 className="font-semibold text-[#0D0D0D] text-lg leading-snug">{title}</h3>
      <p className="text-[#888888] text-base leading-relaxed">{description}</p>
    </motion.div>
  );
}
