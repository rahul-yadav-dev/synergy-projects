"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { SERVICES } from "@/lib/constants";
import { Ruler, Building2, Factory, Wrench, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Ruler,
  Building2,
  Factory,
  Wrench,
};

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our Electrical Contracting Services"
      className="py-20 md:py-32 px-4 md:px-8 relative"
    >
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent-cyan/10 opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="What We Do"
          title="Our Electrical Contracting Services"
          description="From design to maintenance, we deliver end-to-end electrical solutions for industrial, commercial, and hospitality projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <GlowCard key={service.id} delay={index * 0.15}>
                <div className="p-6 md:p-8">
                  {Icon && <Icon className="w-10 h-10 text-accent-cyan mb-4" />}
                  <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
