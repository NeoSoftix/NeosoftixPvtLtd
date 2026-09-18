"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

const ORBIT_DURATION = 32;
const CENTER_INTERVAL = 2600;

const partners = [
  { src: "/anghiti.png", alt: "Angithi Indian Cuisine", category: "Restaurant & Catering", dark: true },
  { src: "/malo-tech.png", alt: "malo-tech.de", category: "Tech Solutions" },
  { src: "/supersure.png", alt: "SuperSure", category: "Consumer Brands" },
  { src: "/gg-pizza.png", alt: "GG Pizza", category: "Pizzeria & Dining", dark: true },
  { src: "/cleantime.png", alt: "CleanTime", category: "Cleaning Services" },
  { src: "/parkease.png", alt: "ParkEase", category: "Parking Solutions" },
  { src: "/pizzeria.png", alt: "Pizzeria Da Luigi", category: "Italian Restaurant", dark: true },
  { src: "/efsane.png", alt: "Efsane", category: "E-Commerce", dark: true },
  { src: "/brothers.png", alt: "Brothers Automotive", category: "Automotive", dark: true },
  { src: "/liefro.png", alt: "Liefro", category: "Mobile Platform" },
  { src: "/anayaindiankitchen.png", alt: "Anaya Indian Kitchen", category: "Fine Dining", dark: true },
];

const features = [
  {
    label: "Strong Partnerships",
    icon: (
      <path
        d="M8 12l2.5 2.5L16 9M3 8l4-4h4l2 2M21 8l-4-4h-4l-2 2M3 8v6a2 2 0 002 2h1M21 8v6a2 2 0 01-2 2h-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Lasting Trust",
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Shared Success",
    icon: (
      <path
        d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function TrustedBy() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % partners.length);
    }, CENTER_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const angleStep = 360 / partners.length;

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f5ee]">
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-auto grid w-full items-center gap-16 px-6 py-12 md:px-10 md:py-14 lg:grid-cols-2 lg:gap-8 lg:px-16 lg:py-16 2xl:max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.25em] text-slate-600">
            <span className="h-px w-8 bg-blue-600" />
            OUR TRUSTED PARTNERS
          </div>

          <div className="mt-5">
            <AnimatedHeading
              text="Trusted by Great Businesses"
              highlightWords={["Great", "Businesses"]}
              fontClass={playfair.className}
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1729] sm:text-5xl lg:text-6xl"
            />
          </div>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600 sm:text-xl">
            We are proud to collaborate with amazing brands across different
            industries. Their trust inspires us to deliver excellence every
            day.
          </p>

          <div className="mt-10 flex flex-wrap items-start gap-x-8 gap-y-6">
            {features.map((feature, i) => (
              <div key={feature.label} className="flex items-center gap-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 text-blue-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      {feature.icon}
                    </svg>
                  </span>
                  <span className="max-w-[8rem] text-sm font-semibold uppercase leading-snug tracking-wide text-slate-800">
                    {feature.label}
                  </span>
                </div>
                {i < features.length - 1 && (
                  <span className="hidden h-10 w-px bg-slate-300 sm:block" />
                )}
              </div>
            ))}
          </div>

          <a
            href="#partners"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#050b16] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-600 hover:scale-[1.03]"
          >
            Our Partners
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[560px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10" />

          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
          >
            {partners.map((partner, i) => {
              const angle = angleStep * i;
              return (
                <div
                  key={partner.alt}
                  className="absolute left-1/2 top-1/2 h-0 w-0"
                  style={{
                    transform: `rotate(${angle}deg) translate(clamp(120px, 34vw, 230px)) rotate(${-angle}deg)`,
                  }}
                >
                  <motion.div
                    className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: ORBIT_DURATION,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl p-2.5 shadow-[0_8px_20px_rgba(15,23,41,0.15)] ring-1 ring-black/5 sm:h-20 sm:w-20 sm:p-3 md:h-24 md:w-24 md:p-3.5 ${
                        partner.dark ? "bg-[#0c0c0c]" : "bg-white"
                      }`}
                    >
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        width={140}
                        height={140}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-wide text-slate-500 md:block">
                      {partner.category}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(15,23,41,0.25)] ring-1 ring-black/5 sm:h-44 sm:w-44 md:h-52 md:w-52">
            <AnimatePresence mode="wait">
              <motion.div
                key={partners[activeIndex].alt}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex h-full w-full items-center justify-center"
              >
                <Image
                  src={partners[activeIndex].src}
                  alt={partners[activeIndex].alt}
                  width={220}
                  height={220}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
