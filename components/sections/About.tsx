"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";

function CircuitPattern() {
  const dots: { row: number; col: number }[] = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      dots.push({ row, col });
    }
  }

  const activeIndices = new Set([
    0, 2, 5, 7, 9, 11, 14, 17, 18, 21, 23, 26, 28, 30, 33, 35, 37, 40, 42,
    44, 47, 49, 51, 53, 56, 58, 61, 63,
  ]);

  const lineSegments = [
    { x1: 2, y1: 0, x2: 5, y2: 0 },
    { x1: 0, y1: 1, x2: 0, y2: 3 },
    { x1: 5, y1: 1, x2: 7, y2: 1 },
    { x1: 2, y1: 2, x2: 2, y2: 4 },
    { x1: 3, y1: 3, x2: 5, y2: 3 },
    { x1: 7, y1: 2, x2: 7, y2: 5 },
    { x1: 4, y1: 5, x2: 7, y2: 5 },
    { x1: 1, y1: 6, x2: 1, y2: 7 },
    { x1: 5, y1: 6, x2: 5, y2: 7 },
    { x1: 0, y1: 7, x2: 3, y2: 7 },
  ];

  return (
    <div className="relative w-full h-full p-6 md:p-8">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lineSegments.map((seg, i) => (
          <motion.line
            key={`line-${i}`}
            x1={seg.x1 * 14.28 + 3}
            y1={seg.y1 * 14.28 + 3}
            x2={seg.x2 * 14.28 + 3}
            y2={seg.y2 * 14.28 + 3}
            stroke="var(--accent-cyan)"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
          />
        ))}

        {dots.map(({ row, col }) => {
          const idx = row * 8 + col;
          const isActive = activeIndices.has(idx);
          const cx = col * 14.28 + 3;
          const cy = row * 14.28 + 3;

          return (
            <motion.circle
              key={`dot-${idx}`}
              cx={cx}
              cy={cy}
              r={isActive ? 1.8 : 1}
              fill={isActive ? "var(--accent-cyan)" : "currentColor"}
              className={isActive ? "opacity-70" : "text-text-muted opacity-20"}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.015 }}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" aria-label="About Synergy Projects" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Who We Are" title="About Synergy Projects" align="left" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-5">
            <AnimateOnScroll direction="left">
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                At Synergy Projects, we specialize in a wide range of assignments including
                industrial, office, warehouse, commercial construction, as well as hospitality
                projects such as hotels and restaurants. No matter the scope or complexity, we
                approach each project with precision and dedication.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.15}>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                Our team comprises skilled engineers, senior supervisors, foremen, and trained
                workers equipped with advanced tools and technology. From our offices in{" "}
                <span className="text-accent-cyan font-medium">Gurgaon, Haryana</span> and{" "}
                <span className="text-accent-cyan font-medium">Vadodara, Gujarat</span>, we
                deliver excellence across India.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.3}>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                With a focus on innovation, reliability, and customer satisfaction, Synergy
                Projects is committed to being the partner of choice for all electrical
                contracting needs.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll direction="right">
            <div className="animate-float rounded-2xl bg-bg-surface border border-bg-surface-border h-64 lg:aspect-square lg:h-auto overflow-hidden">
              <CircuitPattern />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
