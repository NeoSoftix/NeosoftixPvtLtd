"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-[#050b16] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden text-white flex flex-col justify-center">
      {/* Background Ambient Lighting */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050b16] via-[#081329] to-[#040914]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[160px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[450px] w-[450px] rounded-full bg-sky-400/10 blur-[130px]" />

      {/* SOFT & SUBTLE CONTINUOUS SWEEPING LASER BORDER STROKE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden p-[1px]">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-[100%] w-[300%] h-[300%] left-[-100%] top-[-100%] opacity-40"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, rgba(56, 189, 248, 0.4) 320deg, rgba(59, 130, 246, 0.6) 350deg, rgba(255, 255, 255, 0.7) 360deg)",
          }}
        />
        <div className="w-full h-full bg-[#050b16]/95" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16 text-center z-10">
        
        {/* Top Tag Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-5 py-2 text-xs sm:text-sm font-bold tracking-[0.25em] text-sky-400 uppercase backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
        >
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
          OUR SERVICES
        </motion.div>

        {/* Animated Heading (Centered Text, White & Blue) */}
        <div className="max-w-4xl mx-auto flex justify-center text-center">
          <AnimatedHeading
            text="Engineering High-Performance Digital Products & Scalable Systems"
            highlightWords={["Digital", "Products", "Scalable", "Systems"]}
            fontClass={playfair.className}
            dark={true}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight justify-center text-center"
          />
        </div>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-base sm:text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto font-normal"
        >
          Choose the services you need—from building high-converting web platforms and native mobile apps to scaling your business with cloud infrastructure.
        </motion.p>

      </div>
    </section>
  );
}
