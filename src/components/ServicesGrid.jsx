"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { allServicesData } from "./ServicesGridData";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

function Service3DCardLight({ service, idx }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-[32px] bg-white p-7 sm:p-9 border border-slate-200/80 shadow-[0_15px_35px_-10px_rgba(15,23,42,0.06)] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-blue-500 hover:shadow-[0_25px_50px_-15px_rgba(59,130,246,0.2)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* MOUSE TRACKING DYNAMIC LIGHT SPOT */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 75%)`,
          }}
        />
      )}

      {/* GLOWING BORDER HIGHLIGHT ON HOVER */}
      <div className="absolute inset-0 pointer-events-none rounded-[32px] p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 opacity-70" />
      </div>

      <div className="relative z-10">
        {/* Top 3D Icon & Step Number */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            {service.icon}
          </div>
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl font-extrabold text-[#0f1729] tracking-tight group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h3>
        <span className="inline-block mt-1 text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {service.tagline}
        </span>

        {/* Description */}
        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
          {service.description}
        </p>

        {/* Key Features List */}
        <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
          {service.features.map((ft) => (
            <li key={ft} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 font-bold mt-0.5">
                ✓
              </span>
              <span>{ft}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-6">
        {/* Tech Stack Pills */}
        <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200/80 group-hover:border-blue-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 3D Action CTA Button */}
        <a
          href="/contact"
          className="mt-6 flex items-center justify-between w-full rounded-2xl bg-[#0f1729] px-5 py-3.5 text-xs sm:text-sm font-semibold text-white group-hover:bg-blue-600 transition-all duration-300 shadow-md"
        >
          <span>Contact Us</span>
          <span className="group-hover:translate-x-1 transition-transform font-bold">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesGrid({ activeCategory }) {
  const filteredServices =
    !activeCategory || activeCategory === "All Services"
      ? allServicesData
      : allServicesData.filter((s) => s.category === activeCategory);

  return (
    <section id="services-grid" className="relative w-full bg-[#f8fafc] py-20 lg:py-32 text-slate-900">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            3D DIGITAL CAPABILITIES
          </span>
          <h2 className={`${playfair.className} text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0f1729] mt-3`}>
            Engineering Products That Scale
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal">
            Hover over any service card to inspect our architecture standards, deliverables, and tech stack details.
          </p>
        </div>

        {/* 3D Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredServices.map((service, idx) => (
            <Service3DCardLight key={service.id} service={service} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
