"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { PROJECTS } from "@/lib/constants";

const categoryGradients: Record<string, string> = {
  Industrial: "from-cyan-900/30 to-bg-surface",
  Hospitality: "from-amber-900/30 to-bg-surface",
  Commercial: "from-purple-900/30 to-bg-surface",
  "Design & Build": "from-emerald-900/30 to-bg-surface",
};

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Executed Projects Across India"
      className="py-20 md:py-32 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Work"
          title="Executed Projects Across India"
          description="From industrial powerhouses to hospitality landmarks, here are some of the projects we've delivered."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <AnimateOnScroll key={project.name} delay={index * 0.1}>
              <article>
                <GlowCard>
                  <div
                    className={`relative h-48 overflow-hidden bg-gradient-to-b ${categoryGradients[project.category] ?? "from-cyan-900/30 to-bg-surface"}`}
                  >
                    <img
                      src={project.image}
                      alt={`Synergy Projects electrical installation at ${project.name}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-text-primary">
                      {project.name}
                    </h3>
                    <p className="text-text-muted text-sm mt-2">
                      {project.description}
                    </p>
                  </div>
                </GlowCard>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
