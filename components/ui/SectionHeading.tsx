"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {label && (
        <AnimateOnScroll>
          <span className="inline-block text-accent-cyan text-sm font-medium tracking-widest uppercase mb-3">
            {label}
          </span>
        </AnimateOnScroll>
      )}
      <AnimateOnScroll delay={0.1}>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
          {title}
        </h2>
      </AnimateOnScroll>
      {description && (
        <AnimateOnScroll delay={0.2}>
          <p className="mt-4 text-text-muted text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </AnimateOnScroll>
      )}
    </div>
  );
}
