"use client";

import { motion } from "framer-motion";

// template.tsx re-mounts on every navigation, giving us clean page transitions.
// AnimatePresence exit is not needed here — the incoming animation is enough.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
