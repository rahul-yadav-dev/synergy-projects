"use client";

import { motion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlowCard({
  children,
  className = "",
  delay = 0,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-bg-surface-border bg-bg-surface transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, var(--accent-cyan), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
