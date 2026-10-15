"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT_TABS, filterByCategory, projectUrl, workProjects } from "@/data/projects";
import { ArrowUpRightIcon } from "./icons";


export default function WorkGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = filterByCategory(workProjects, activeTab);

  return (
    <section className="relative w-full bg-[#f8fafc] py-12 lg:py-16 text-[#0f1729] overflow-x-clip">
      {/* Background Subtle Ambient Glows */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
          {PROJECT_TABS.map((tab) => {
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
            {filteredProjects.map((project) => {
              const url = projectUrl(project);
              return (
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
                {/* Whole card opens the live site */}
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} website`}
                    className="absolute inset-0 z-30 rounded-3xl"
                  />
                )}
                <div>
                  {/* Card Header Image / Logo Box */}
                  <div className={`relative w-full aspect-[16/10] rounded-2xl ${project.bannerBg ?? project.client.bannerBg} border border-slate-200/40 overflow-hidden flex items-center justify-center p-6 mb-5 shadow-inner`}>
                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 z-20 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-slate-800 border border-slate-200 shadow-sm backdrop-blur-md">
                      {project.badge}
                    </div>

                    {/* Project Logo Display */}
                    <div className="relative z-10 h-24 w-48 sm:h-28 sm:w-56 flex items-center justify-center p-2">
                      <Image
                        src={project.client.logo}
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

                  {url && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600">
                      Visit Website
                      <ArrowUpRightIcon size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  )}
                </div>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
