"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  icon?: ReactNode;
}

const variants = {
  primary:
    "bg-accent-amber text-bg-primary font-semibold hover:bg-amber-400 shadow-lg shadow-amber-500/20",
  secondary:
    "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan/20",
  outline:
    "border border-bg-surface-border text-text-primary hover:border-accent-cyan/50 hover:text-accent-cyan",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  icon,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 cursor-pointer min-h-[48px] ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}
