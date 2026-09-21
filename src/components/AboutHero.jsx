"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

const heroStats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "50+", label: "Global Brands" },
];

export default function AboutHero() {
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
          ABOUT NEOSOFTIX
        </motion.div>

        {/* Animated Heading (Centered Text, White & Blue) */}
        <div className="max-w-4xl mx-auto flex justify-center text-center">
          <AnimatedHeading
            text="Architecting the Future of Digital Products & Scalable Solutions"
            highlightWords={["Digital", "Products", "Scalable", "Solutions"]}
            fontClass={playfair.className}
            dark={true}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight justify-center text-center"
          />
        </div>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-base sm:text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto font-normal"
        >
          We are a team of visionary engineers, digital strategists, and UI/UX designers crafting enterprise-grade software, high-conversion mobile apps, and growth ecosystems.
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-sky-400 px-8 py-4 text-xs sm:text-sm font-bold text-[#050b16] shadow-[0_10px_30px_rgba(56,189,248,0.3)] transition-all duration-300 hover:bg-white hover:scale-[1.03]"
          >
            <span>Start Your Project</span>
            <span className="font-bold">→</span>
          </a>

          <a
            href="#mission"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
          >
            <span>Our Mission & Story ↓</span>
          </a>
        </motion.div>

        {/* Micro Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 max-w-xl mx-auto divide-x divide-white/10"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-2 sm:px-4">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
