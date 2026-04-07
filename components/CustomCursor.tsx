"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Make them visible now that we know we have a pointer
    dot.style.opacity = "1";
    ring.style.opacity = "1";

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let isHovering = false;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Event delegation — catches all interactive elements including dynamic ones
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-cursor-hover], input, select, textarea")) {
        isHovering = true;
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-cursor-hover], input, select, textarea")) {
        isHovering = false;
      }
    };

    const animate = () => {
      // Dot tracks exactly
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      // Ring lerps with slight lag for feel
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;

      if (isHovering) {
        ring.style.width = "48px";
        ring.style.height = "48px";
        ring.style.marginLeft = "-8px";
        ring.style.marginTop = "-8px";
        ring.style.borderColor = "#FFCE00";
        ring.style.backgroundColor = "rgba(245,200,66,0.08)";
      } else {
        ring.style.width = "32px";
        ring.style.height = "32px";
        ring.style.marginLeft = "0px";
        ring.style.marginTop = "0px";
        ring.style.borderColor = "rgba(244,241,236,0.35)";
        ring.style.backgroundColor = "transparent";
      }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Inner dot — tracks exactly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: 8,
          height: 8,
          backgroundColor: "#FFCE00",
          opacity: 0,
          willChange: "transform",
          mixBlendMode: "normal",
        }}
      />
      {/* Outer ring — follows with lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          width: 32,
          height: 32,
          opacity: 0,
          borderColor: "rgba(244,241,236,0.35)",
          willChange: "transform",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, margin 0.2s ease",
        }}
      />
    </>
  );
}
