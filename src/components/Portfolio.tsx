"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Button from "./Button";
import { playfair, scriptFont } from "@/lib/fonts";
import { PROJECT_TABS, featuredProjects, filterByCategory, projectUrl } from "@/data/projects";
import SectionBadge from "./SectionBadge";
import { ArrowRightIcon } from "./icons";


export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = filterByCategory(featuredProjects, activeTab);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="portfolio" className="relative w-full bg-[#faf9f6] py-16 lg:py-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/3 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
          
          {/* Left Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <SectionBadge variant="line" className="mb-3">OUR PORTFOLIO</SectionBadge>

            <AnimatedHeading
              text="Explore Our Work"
              highlightWords={["Our", "Work"]}
              fontClass={playfair.className}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f1729] leading-tight tracking-tight"
            />

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              Our team delivers innovative, scalable, and creative solutions that help businesses
              reach their goals. Explore our portfolio to see our top projects and connect with us to discover how we can support your growth.
            </p>
          </motion.div>

          {/* Right Filter Tabs & Script Text */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            {/* Script Font Callout */}
            <div
              className={`${scriptFont.className} text-2xl sm:text-3xl text-blue-500 font-semibold tracking-wide hidden sm:block transform -rotate-3`}
            >
              Turning Ideas Into Results ✨
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-200/60 p-1.5 rounded-full border border-slate-300/50">
              {PROJECT_TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#050b16] text-white shadow-md"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/80"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Carousel Container with Side Navigation Buttons */}
        <div className="relative w-full">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Cards Horizontal Scrollable View */}
          <div
            ref={scrollRef}
            className="flex w-full gap-6 overflow-x-auto scroll-smooth py-4 px-1 no-scrollbar scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const url = projectUrl(project);
                const linkProps = url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : { href: "#contact" };
                return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-[300px] sm:w-[350px] lg:w-[380px] shrink-0 flex flex-col rounded-[28px] bg-white border border-slate-200/80 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                >
                  {/* Card Header Image / Banner */}
                  <a {...linkProps} aria-label={`Visit ${project.title}`} className={`relative h-48 sm:h-52 w-full ${project.client.bannerBg} flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden`}>
                    <div className={`absolute inset-0 opacity-40 ${project.bgGradient}`} />
                    
                    {/* Centered Client Logo */}
                    <div className="relative z-10 h-24 w-48 sm:h-28 sm:w-56 flex items-center justify-center p-2">
                      <Image
                        src={project.client.logo}
                        alt={project.title}
                        width={200}
                        height={100}
                        className="h-full w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </a>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d={project.iconPath} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0f1729] tracking-tight group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* View Project Action */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <a
                        {...linkProps}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                      >
                        {url ? "Visit Website" : "View Project"}
                        <ArrowRightIcon className="transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* View More Projects Center Button */}
        <div className="mt-12 text-center">
          <Button href="/work" variant="dark" size="lg" showArrow className="text-sm sm:text-base">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
