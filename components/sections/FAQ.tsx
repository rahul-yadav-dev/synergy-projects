"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { FAQ_DATA } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <SectionHeading label="FAQ" title="Frequently Asked Questions" />

        {FAQ_DATA.map((item, index) => (
          <AnimateOnScroll key={index} delay={index * 0.1}>
            <div className="border border-bg-surface-border rounded-xl mb-3 overflow-hidden bg-bg-surface/50">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left p-5 md:p-6 flex justify-between items-center min-h-[48px] cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-base md:text-lg font-medium text-text-primary pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-text-muted" />
                </motion.div>
              </button>

              <AnimatePresence mode="wait">
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="px-5 pb-5 md:px-6 md:pb-6 text-text-muted text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
