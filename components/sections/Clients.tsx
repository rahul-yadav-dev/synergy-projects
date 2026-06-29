"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/ui/Marquee";
import { CLIENTS } from "@/lib/constants";

export default function Clients() {
  return (
    <section
      aria-label="Trusted By Leading Companies"
      className="py-20 md:py-32 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Clients"
          title="Trusted By Leading Companies"
        />

        <Marquee speed={25}>
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="px-8 py-4 rounded-xl border border-bg-surface-border bg-bg-surface text-text-primary font-heading text-base md:text-lg font-medium whitespace-nowrap"
            >
              {client}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
