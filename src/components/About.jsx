"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

const highlights = [
  "Dedicated team of engineers, designers & strategists",
  "Transparent process with measurable results",
  "End-to-end support from idea to launch",
];

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-white py-20 lg:py-32">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative mx-auto grid w-full items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-14 lg:px-16 2xl:max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.25em] text-slate-600">
            <span className="h-px w-8 bg-[#3b82f6]" />
            ABOUT US
          </div>

          <h2
            className={`${playfair.className} mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight text-[#0f1729] sm:text-5xl lg:text-6xl`}
          >
            Good Ideas
            <br />
            Build <span className="text-[#3b82f6]">Great Things</span>
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
            At Neosoftix, we turn ambitious ideas into reliable digital
            products. From strategy to launch, our team partners closely with
            you to design, build, and scale software that actually moves your
            business forward.
          </p>

          <ul className="mt-8 space-y-4">
            {highlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8.5L6.2 11.5L13 4.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-slate-700">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#learn-more"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#0f1729] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Learn More About Us
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
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[1343/1171] w-full max-w-[380px] sm:max-w-[460px] md:max-w-[540px] lg:max-w-[640px]"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#3b82f6]/25 via-blue-200/30 to-transparent blur-2xl" />

          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] ring-1 ring-black/5">
            <Image
              src="/aboutlright.png"
              alt="Neosoftix team collaborating"
              fill
              sizes="(max-width: 1024px) 90vw, 640px"
              className="object-contain"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
