"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface Props {
  children: React.ReactNode;
  className?: string;
  strength?: number; // 0-1, pull intensity
  radius?: number;   // px, how far the effect reaches
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.28,
  radius = 90,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        const pull = (1 - dist / radius) * strength;
        gsap.to(el, {
          x: dx * pull,
          y: dy * pull,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
          overwrite: "auto",
        });
      }
    };

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.35)",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [radius, strength]);

  return (
    <div ref={ref} className={`inline-flex ${className}`} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
