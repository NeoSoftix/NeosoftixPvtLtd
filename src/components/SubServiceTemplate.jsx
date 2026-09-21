"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

export default function SubServiceTemplate({ data }) {
  if (!data) return null;

  return (
    <div className="relative w-full bg-[#050b16] text-white overflow-hidden">
      
      {/* HERO SECTION WITH SOFT SUBTLE LASER BORDER SWEEP */}
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
            {data.badge}
          </motion.div>

          {/* Animated Heading (Centered Text, White & Blue) */}
          <div className="max-w-4xl mx-auto flex justify-center text-center">
            <AnimatedHeading
              text={data.title}
              highlightWords={data.title.split(" ").slice(-2)}
              fontClass={playfair.className}
              dark={true}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight justify-center text-center"
            />
          </div>

          {/* Sub-tagline */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="block mt-4 text-base sm:text-xl font-bold text-sky-400"
          >
            {data.tagline}
          </motion.span>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-sm sm:text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto font-normal"
          >
            {data.description}
          </motion.p>

          {/* Tech Stack Pills (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto"
          >
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-sky-300 border border-white/15 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action CTA Button (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex justify-center"
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-400 px-8 py-4 text-xs sm:text-sm font-bold text-[#050b16] shadow-[0_10px_30px_rgba(56,189,248,0.3)] transition-all duration-300 hover:bg-white hover:scale-[1.03]"
            >
              <span>Contact Us</span>
              <span className="font-bold">→</span>
            </a>
          </motion.div>

          {/* Hero Micro Stats Bar (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 max-w-xl mx-auto divide-x divide-white/10"
          >
            {data.heroStats.map((stat) => (
              <div key={stat.label} className="px-2 sm:px-4">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </span>
                <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* DELIVERABLES & FEATURES SECTION (Clean Crisp Light-Grey Theme) */}
      <section className="relative w-full bg-[#f8fafc] py-16 lg:py-24 text-[#0f1729]">
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
              DELIVERABLES & GUARANTEES
            </span>
            <h2 className={`${playfair.className} text-3xl sm:text-4xl font-extrabold text-[#0f1729] mt-2`}>
              What You Get With {data.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 font-bold">
                  ✓
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-800">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
