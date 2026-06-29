"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/icons/Logo";
import Button from "@/components/ui/Button";
import { NAV_LINKS, BUSINESS_PHONE } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-bg-surface-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" aria-label="Back to top">
          <Logo />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-[48px] inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" href="#contact" className="ml-3">
            Book Appointment
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:+${BUSINESS_PHONE}`}
            aria-label="Call us"
            className="min-h-[48px] inline-flex min-w-[48px] items-center justify-center rounded-lg text-accent-cyan transition-colors hover:bg-accent-cyan/10"
          >
            <Phone size={22} />
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="min-h-[48px] inline-flex min-w-[48px] items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-bg-surface"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center bg-bg-primary/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="min-h-[48px] inline-flex items-center rounded-xl px-6 py-3 text-xl font-medium text-text-muted transition-colors hover:text-text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: 0.05 * NAV_LINKS.length,
                  duration: 0.3,
                }}
              >
                <Button
                  variant="primary"
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4"
                >
                  Book Appointment
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
