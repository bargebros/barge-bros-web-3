"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  before: string;
  after: string;
  alt: string;
  className?: string;
}

export default function BeforeAfter({ before, after, alt, className = "" }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl select-none cursor-col-resize ${className}`}
      onMouseMove={onMouseMove}
      onMouseDown={() => { dragging.current = true; }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={onTouchMove}
    >
      {/* After (base) */}
      <div className="absolute inset-0">
        <Image src={after} alt={`${alt} - after`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt={`${alt} - before`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#FFCE00] pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FFCE00] flex items-center justify-center shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8H11M5 8L3 6M5 8L3 10M11 8L13 6M11 8L13 10" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 label-text bg-[#0D0D0D]/70 text-[#F5F3EE] px-2 py-1 rounded">Before</span>
      <span className="absolute bottom-3 right-3 label-text bg-[#0D0D0D]/70 text-[#F5F3EE] px-2 py-1 rounded">After</span>
    </div>
  );
}
