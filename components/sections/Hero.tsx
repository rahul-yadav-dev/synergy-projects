"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />

      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SplitText
          text="Smart Electricals, Stronger Infrastructure."
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight justify-center"
        />

        <AnimateOnScroll delay={0.4}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-text-muted md:text-lg lg:text-xl">
            Synergy Projects seamlessly blends innovation, sustainability, and
            technology — redefining real estate with eco-friendly spaces and
            expert electrical solutions across Gurgaon, Vadodara, and all of
            India.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.6}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              href="#projects"
              icon={<ArrowDown size={18} />}
            >
              Explore Our Work
            </Button>
            <Button
              variant="secondary"
              href="#contact"
              icon={<Calendar size={18} />}
            >
              Book Appointment
            </Button>
          </div>
        </AnimateOnScroll>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex justify-center md:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.a
            href="#about"
            aria-label="Scroll down"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="min-h-[48px] inline-flex min-w-[48px] items-center justify-center rounded-full border border-bg-surface-border text-text-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
          >
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
