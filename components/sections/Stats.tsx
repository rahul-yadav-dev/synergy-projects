"use client";

import CountUp from "@/components/ui/CountUp";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section
      aria-label="Company Statistics"
      className="py-16 md:py-24 px-4 md:px-8 border-y border-bg-surface-border bg-bg-surface/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent-cyan"
                />
                <p className="text-text-muted text-sm md:text-base mt-2">
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
