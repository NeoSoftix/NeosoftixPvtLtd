"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  "All",
  "SEO",
  "Website Development",
  "Mobile App Development",
];

const projects = [
  {
    id: "gg-pizza",
    title: "GG Pizza",
    badge: "Website Development",
    tags: "Online Ordering Platform • SEO • High Performance",
    categories: ["Website Development", "SEO"],
    logo: "/gg-pizza.png",
    bannerBg: "bg-[#18100c]",
  },
  {
    id: "pizzeria",
    title: "Pizzeria Da Luigi",
    badge: "Website Development",
    tags: "Website • Ordering • Table Booking • SEO",
    categories: ["Website Development", "SEO"],
    logo: "/pizzeria.png",
    bannerBg: "bg-[#1f0b0d]",
  },
  {
    id: "supersure",
    title: "SuperSure",
    badge: "SEO & Growth",
    tags: "Consumer Brand • PPC Architecture • SEO",
    categories: ["Website Development", "SEO"],
    logo: "/supersure.png",
    bannerBg: "bg-[#7c1d1d]",
  },
  {
    id: "liefro-pos",
    title: "Liefro POS & Operations",
    badge: "Mobile App Development",
    tags: "Full Restaurant POS & Kitchen Operation System",
    categories: ["Mobile App Development", "Website Development"],
    logo: "/liefro.png",
    bannerBg: "bg-[#0c1f28]",
  },
  {
    id: "liefro-platform",
    title: "Liefro Restaurant Management",
    badge: "Website Development",
    tags: "Multi-Restaurant Aggregator & Management Portal",
    categories: ["Website Development", "SEO"],
    logo: "/liefro.png",
    bannerBg: "bg-[#081e1b]",
  },
  {
    id: "brothers",
    title: "Brothers Carwash",
    badge: "Website Development",
    tags: "Automotive Service & Booking Platform",
    categories: ["Website Development"],
    logo: "/brothers.png",
    bannerBg: "bg-[#0b172a]",
  },
  {
    id: "angithi",
    title: "Angithi Indian Cuisine",
    badge: "Website Development",
    tags: "Fine Dining & Catering Digital Portal",
    categories: ["Website Development"],
    logo: "/anghiti.png",
    bannerBg: "bg-[#24130a]",
  },
  {
    id: "parkease",
    title: "ParkEase",
    badge: "Mobile App Development",
    tags: "Smart Parking Mobile App & Cloud Hub",
    categories: ["Website Development", "Mobile App Development"],
    logo: "/parkease.png",
    bannerBg: "bg-[#081e1b]",
  },
  {
    id: "cleantime",
    title: "CleanTime Services",
    badge: "Website Development",
    tags: "Instant Cleaning Estimator & Booking",
    categories: ["Website Development"],
    logo: "/cleantime.png",
    bannerBg: "bg-[#0f1b2d]",
  },
  {
    id: "efsane",
    title: "Efsane Store",
    badge: "Website Development",
    tags: "Luxury E-Commerce Web Platform",
    categories: ["Website Development"],
    logo: "/efsane.png",
    bannerBg: "bg-[#140f26]",
  },
  {
    id: "malo-tech",
    title: "malo-tech.de",
    badge: "Website Development",
    tags: "Engineering & Tech Web Portal",
    categories: ["Website Development"],
    logo: "/malo-tech.png",
    bannerBg: "bg-[#091326]",
  },
  {
    id: "anaya-kitchen",
    title: "Anaya Indian Kitchen",
    badge: "SEO & Growth",
    tags: "Fine Dining & SEO Optimization",
    categories: ["Website Development", "SEO"],
    logo: "/anayaindiankitchen.png",
    bannerBg: "bg-[#1f0b0d]",
  },
];

export default function WorkGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    return project.categories.includes(activeTab);
  });

  return (
    <section className="relative w-full bg-[#f8fafc] py-16 lg:py-24 text-[#0f1729]">
      {/* Background Subtle Ambient Glows */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-[#050b16] text-white border-black shadow-md scale-[1.03]"
                    : "bg-slate-200/70 text-slate-700 border-slate-300/60 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Projects 3-Column Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-6 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.08)] flex flex-col justify-between overflow-hidden hover:border-blue-500 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.18)] transition-all duration-300"
              >
                <div>
                  {/* Card Header Image / Logo Box */}
                  <div className={`relative w-full aspect-[16/10] rounded-2xl ${project.bannerBg} border border-slate-200/40 overflow-hidden flex items-center justify-center p-6 mb-5 shadow-inner`}>
                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 z-20 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-slate-800 border border-slate-200 shadow-sm backdrop-blur-md">
                      {project.badge}
                    </div>

                    {/* Project Logo Display */}
                    <div className="relative z-10 h-24 w-48 sm:h-28 sm:w-56 flex items-center justify-center p-2">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={220}
                        height={110}
                        className="h-full w-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Title & Tags */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f1729] tracking-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-normal">
                    {project.tags}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
