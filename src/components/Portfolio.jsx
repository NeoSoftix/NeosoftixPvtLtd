"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Caveat } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const scriptFont = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const TABS = [
  "All",
  "SEO",
  "Website Development",
  "Mobile App Development",
];

const projectsData = [
  {
    id: "gg-pizza",
    title: "GG Pizza",
    logo: "/gg-pizza.png",
    bgGradient: "bg-gradient-to-br from-amber-950 via-neutral-900 to-black",
    bannerBg: "bg-[#18100c]",
    categories: ["Website Development", "SEO"],
    description:
      "We built a high-performance web ordering portal and executed a targeted SEO campaign that boosted organic traffic and delivery orders.",
    icon: (
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "pizzeria",
    title: "Pizzeria Da Luigi",
    logo: "/pizzeria.png",
    bgGradient: "bg-gradient-to-br from-red-950 via-rose-950 to-neutral-900",
    bannerBg: "bg-[#1f0b0d]",
    categories: ["Website Development", "SEO"],
    description:
      "Engineered an authentic Italian restaurant site featuring instant table booking, digital menu, and multi-region local SEO optimization.",
    icon: (
      <path
        d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "supersure",
    title: "SuperSure",
    logo: "/supersure.png",
    bgGradient: "bg-gradient-to-br from-red-700 via-rose-800 to-slate-900",
    bannerBg: "bg-[#7c1d1d]",
    categories: ["Website Development", "SEO"],
    description:
      "We created targeted PPC campaigns and high-converting web architecture that maximized ROI, reduced cost per click, and increased conversions.",
    icon: (
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "brothers",
    title: "Brothers Carwash",
    logo: "/brothers.png",
    bgGradient: "bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950",
    bannerBg: "bg-[#0b172a]",
    categories: ["Website Development"],
    description:
      "We created targeted PPC campaigns and responsive booking platform that maximized ROI, reduced cost per customer, and increased conversions.",
    icon: (
      <path
        d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h10l2 4M3 9v7a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "anghiti",
    title: "Angithi Indian Cuisine",
    logo: "/anghiti.png",
    bgGradient: "bg-gradient-to-br from-amber-900 via-orange-950 to-amber-950",
    bannerBg: "bg-[#24130a]",
    categories: ["Website Development"],
    description:
      "We executed a high-performance digital marketing campaign and custom website that boosted brand visibility and generated quality leads.",
    icon: (
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 8v4l3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "parkease",
    title: "ParkEase",
    logo: "/parkease.png",
    bgGradient: "bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-950",
    bannerBg: "bg-[#081e1b]",
    categories: ["Website Development", "Mobile App Development"],
    description:
      "Designed a cross-platform mobile app & web management hub enabling real-time parking spot reservation, navigation, and seamless digital payments.",
    icon: (
      <path
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "cleantime",
    title: "CleanTime Services",
    logo: "/cleantime.png",
    bgGradient: "bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950",
    bannerBg: "bg-[#0f1b2d]",
    categories: ["Website Development"],
    description:
      "Built a modern commercial cleaning platform with instant cost estimator, automated booking calendar, and client portal integration.",
    icon: (
      <path
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "liefro",
    title: "Liefro",
    logo: "/liefro.png",
    bgGradient: "bg-gradient-to-br from-cyan-900 via-slate-900 to-blue-950",
    bannerBg: "bg-[#0c1f28]",
    categories: ["Website Development", "Mobile App Development", "SEO"],
    description:
      "Engineered an intuitive mobile application & optimized web platform coupled with nationwide technical SEO for rapid user acquisition.",
    icon: (
      <path
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "efsane",
    title: "Efsane",
    logo: "/efsane.png",
    bgGradient: "bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950",
    bannerBg: "bg-[#140f26]",
    categories: ["Website Development"],
    description:
      "Developed a luxury e-commerce web platform engineered for ultra-fast load speed, seamless checkout, and high conversion rates.",
    icon: (
      <path
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const scrollRef = useRef(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "All") return true;
    return project.categories.includes(activeTab);
  });

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="portfolio" className="relative w-full bg-[#faf9f6] py-20 lg:py-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/3 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          
          {/* Left Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span className="h-0.5 w-6 bg-blue-600" />
              OUR PORTFOLIO
            </div>

            <AnimatedHeading
              text="Explore Our Work"
              highlightWords={["Our", "Work"]}
              fontClass={playfair.className}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f1729] leading-tight tracking-tight"
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
              {TABS.map((tab) => {
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
              {filteredProjects.map((project) => (
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
                  <div className={`relative h-48 sm:h-52 w-full ${project.bannerBg} flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden`}>
                    <div className={`absolute inset-0 opacity-40 ${project.bgGradient}`} />
                    
                    {/* Centered Client Logo */}
                    <div className="relative z-10 h-24 w-48 sm:h-28 sm:w-56 flex items-center justify-center p-2">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={200}
                        height={100}
                        className="h-full w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            {project.icon}
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
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                      >
                        View Project
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="transition-transform group-hover/link:translate-x-1"
                        >
                          <path
                            d="M2.5 8H13.5M13.5 8L8.5 3M13.5 8L8.5 13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* View More Projects Center Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#050b16] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-[1.03]"
          >
            View More Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M2.5 8H13.5M13.5 8L8.5 3M13.5 8L8.5 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
