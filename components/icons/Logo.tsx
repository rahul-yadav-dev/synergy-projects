"use client";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

export default function Logo({ className = "", compact = false }: LogoProps) {
  if (compact) {
    return (
      <span className={`font-heading font-bold text-xl tracking-tight ${className}`}>
        <span className="text-accent-cyan">S</span>
        <span className="text-text-primary">P</span>
      </span>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#111118" />
        <path
          d="M18 6L10 18h5l-1 8 8-12h-5l1-8z"
          fill="url(#bolt-gradient)"
          stroke="#00D4FF"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient id="bolt-gradient" x1="12" y1="6" x2="20" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-heading font-bold text-lg tracking-wider text-text-primary">
          SYNERGY
        </span>
        <span className="text-[10px] tracking-[0.3em] text-text-muted uppercase">
          Projects
        </span>
      </div>
    </div>
  );
}
