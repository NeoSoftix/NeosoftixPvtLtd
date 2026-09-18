"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Word({ children, progress, range, isHighlight, dark = false }) {
  // Opacity transforms from 0 to 1 as scroll position passes through this word's range
  const opacity = useTransform(progress, range, [0, 1]);

  const baseDimColor = dark ? "text-slate-700" : "text-slate-300";
  const activeColor = isHighlight
    ? "text-blue-500"
    : dark
    ? "text-white"
    : "text-[#0f1729]";

  return (
    <span className="relative inline-block mr-[0.25em] select-none">
      {/* Dimmed background word visible before scroll reaches it */}
      <span className={`opacity-30 ${baseDimColor}`}>
        {children}
      </span>

      {/* Lit foreground word that reveals progressively as user scrolls */}
      <motion.span
        style={{ opacity }}
        className={`absolute left-0 top-0 ${activeColor}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function AnimatedHeading({
  text,
  highlightWords = [],
  className = "",
  fontClass = "",
  dark = false,
  as: Component = "h2",
}) {
  const containerRef = useRef(null);

  // Track scroll position of heading across the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.88", "start 0.35"],
  });

  const words = text.split(" ");

  return (
    <Component
      ref={containerRef}
      className={`inline-flex flex-wrap gap-y-1 ${fontClass} ${className}`}
    >
      {words.map((word, i) => {
        // Compute individual scroll trigger window for each word
        const start = i / words.length;
        const end = start + 1 / words.length;

        const isHighlight = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[start, end]}
            isHighlight={isHighlight}
            dark={dark}
          >
            {word}
          </Word>
        );
      })}
    </Component>
  );
}
