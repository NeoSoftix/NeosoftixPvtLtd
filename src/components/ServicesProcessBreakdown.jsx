"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

const guarantees = [
  {
    title: "100% Code Ownership",
    desc: "You retain full IP rights, source repositories, and technical documentation.",
    icon: "📜",
  },
  {
    title: "Sub-Second Performance SLA",
    desc: "Built to pass Core Web Vitals with optimized mobile load times.",
    icon: "⚡",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "End-to-end data encryption, OWASP vulnerability compliance, and secure APIs.",
    icon: "🔒",
  },
  {
    title: "Dedicated Technical Lead",
    desc: "Direct communication with senior engineers and clear weekly sprint demos.",
    icon: "👨‍💻",
  },
];

export default function ServicesProcessBreakdown() {
  return (
    <section className="relative w-full bg-[#050b16] py-20 lg:py-32 text-white overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
            THE NEOSOFTIX GUARANTEE
          </span>
          <h2 className={`${playfair.className} text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3`}>
            Engineering Standards You Can Rely On
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal">
            We don&apos;t just build software—we engineer scalable digital assets designed for long-term reliability and growth.
          </p>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {guarantees.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-[#091326]/90 p-7 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner Inside Services Page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 p-8 sm:p-12 lg:p-14 shadow-2xl text-center overflow-hidden"
        >
          {/* Decorative Subtle Background Orbs */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-black/20 blur-2xl" />

          <span className="text-xs font-bold tracking-widest text-blue-100 uppercase block mb-2">
            READY TO SCALE YOUR DIGITAL PRESENCE?
          </span>

          <h3 className={`${playfair.className} text-2xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight`}>
            Let&apos;s Build Something Extraordinary Together
          </h3>

          <p className="mt-4 text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-normal">
            Book a strategy call with our tech leads to review your requirements, architecture, and timeline.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white px-8 py-4 text-xs sm:text-sm font-bold text-[#050b16] shadow-xl hover:bg-slate-100 transition-all hover:scale-[1.03]"
            >
              Book A Free Strategy Call
            </a>
            <a
              href="tel:+918557062045"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all"
            >
              Call +91-85570 62045
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
