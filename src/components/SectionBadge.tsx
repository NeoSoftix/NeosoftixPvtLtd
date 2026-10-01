import type { ReactNode } from "react";

type Variant = "dot" | "pill" | "line" | "plain";
type Tone = "light" | "dark";

type SectionBadgeProps = {
  children: ReactNode;
  variant?: Variant;
  /** "light" = on light backgrounds (blue-600), "dark" = on dark backgrounds (sky-400) */
  tone?: Tone;
  className?: string;
};

const toneClasses: Record<Tone, { text: string; bg: string }> = {
  light: { text: "text-blue-600", bg: "bg-blue-600" },
  dark: { text: "text-sky-400", bg: "bg-sky-400" },
};

export default function SectionBadge({
  children,
  variant = "dot",
  tone = "light",
  className = "",
}: SectionBadgeProps) {
  const { text, bg } = toneClasses[tone];

  if (variant === "plain") {
    return (
      <span className={`text-xs font-bold tracking-widest uppercase ${text} ${className}`}>
        {children}
      </span>
    );
  }

  if (variant === "pill") {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-5 py-2 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.15)] ${text} ${className}`}
      >
        <span className={`h-2 w-2 rounded-full animate-pulse ${bg}`} />
        {children}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center text-xs sm:text-sm font-bold tracking-widest uppercase ${
        variant === "line" ? "gap-2.5" : "gap-2"
      } ${text} ${className}`}
    >
      {variant === "line" ? (
        <span className={`h-0.5 w-6 ${bg}`} />
      ) : (
        <span className={`h-2 w-2 rounded-full animate-pulse ${bg}`} />
      )}
      {children}
    </div>
  );
}
