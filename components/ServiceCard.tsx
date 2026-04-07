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
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(10,22,40,0.15)" }}
      transition={{ duration: 0.25 }}
      className="bg-[#F5F3EE] rounded-xl p-8 flex flex-col gap-4 cursor-default"
    >
      <div className="w-12 h-12 rounded-lg bg-[#0D0D0D] flex items-center justify-center">
        <Icon size={22} className="text-[#FFCE00]" strokeWidth={1.5} />
      </div>
      <h3 className="font-semibold text-[#0D0D0D] text-lg leading-snug">{title}</h3>
      <p className="text-[#888888] text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
