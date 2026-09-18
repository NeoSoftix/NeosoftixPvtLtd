"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: "140+", label: "Tech Transformers" },
  { value: "200+", label: "Trusted Customers" },
  { value: "1000+", label: "Projects Delivered" },
];

export default function Hero() {
  return (
    <section
      className="relative isolate min-h-[560px] w-full overflow-hidden bg-[#050b16] bg-[url('/herobg.png')] bg-top bg-no-repeat bg-[length:100%_auto] sm:min-h-[640px] lg:min-h-[760px] xl:min-h-[820px]"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050b16] via-[#050b16]/35 to-transparent" />

      <div className="flex min-h-[560px] flex-col justify-center px-6 pb-16 pt-20 sm:min-h-[640px] md:px-10 md:pb-24 md:pt-24 lg:min-h-[760px] lg:px-16 lg:pb-32 lg:pt-28 xl:min-h-[820px]">
        <div className="mx-auto w-full 2xl:max-w-[1440px]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <AnimatedHeading
            as="h1"
            text="Turning concepts into impactful digital experiences"
            highlightWords={["impactful", "digital", "experiences"]}
            fontClass={playfair.className}
            dark={true}
            className="text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
          />

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#book-appointment"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#050b16] transition-transform hover:scale-[1.03]"
            >
              Book An Appointment
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
            <a
              href="#learn-more"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex max-w-md flex-wrap gap-x-8 gap-y-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-sky-400 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
