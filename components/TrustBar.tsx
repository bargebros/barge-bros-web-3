"use client";

import { motion } from "framer-motion";
import { MapPin, Anchor } from "lucide-react";

const items = [
  { icon: MapPin, label: "Okanagan Owned & Operated" },
  { icon: Anchor, label: "Waterfront Access Specialists" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#FFCE00] py-4">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2"
            >
              <item.icon size={16} className="text-[#0D0D0D]" strokeWidth={2.5} />
              <span className="label-text text-[#0D0D0D] font-semibold">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
