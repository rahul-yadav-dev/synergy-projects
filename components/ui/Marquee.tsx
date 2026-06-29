"use client";

import { type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function Marquee({
  children,
  speed = 30,
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />
      <div
        className="animate-marquee flex items-center gap-12 w-max"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
