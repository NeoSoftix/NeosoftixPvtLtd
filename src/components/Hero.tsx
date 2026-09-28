"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Button from "./Button";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050b16]">
      {/* Background Image */}
      <Image
        src="/herobg.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Gradient Overlay for Text Legibility (left side only, image stays visible on the right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b16] via-[#050b16]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-6 pt-24 pb-16 sm:px-10 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-2xl text-left"
        >
          {/* Sub-tag Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs sm:text-sm font-semibold tracking-widest text-sky-400 uppercase backdrop-blur-md mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            IDEAS TO IMPACT
          </div>

          {/* Main Headline */}
          <h1
            className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight`}
          >
            Turning concepts into{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              impactful digital experiences
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl font-normal">
            Empowering global brands with custom software, mobile apps, and
            high-performance digital marketing solutions.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#contact" variant="light" size="md" showArrow>
              Book An Appointment
            </Button>

            <Button href="#services" variant="outline" size="md">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
