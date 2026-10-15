"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import SectionBadge from "./SectionBadge";
import { playfair } from "@/lib/fonts";

const CUBE = 150; // px, edge length of the 3D cube

const faces = [
  { label: "SEO", transform: `rotateY(0deg) translateZ(${CUBE / 2}px)`, icon: "M11 4a7 7 0 105.2 11.7L20 20M11 8v6M8 11h6" },
  { label: "Web", transform: `rotateY(90deg) translateZ(${CUBE / 2}px)`, icon: "M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" },
  { label: "Apps", transform: `rotateY(180deg) translateZ(${CUBE / 2}px)`, icon: "M8 3h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2zM11 18h2" },
  { label: "Cloud", transform: `rotateY(-90deg) translateZ(${CUBE / 2}px)`, icon: "M7 18a4 4 0 01-.6-7.96A6 6 0 0118 9a4.5 4.5 0 01-.5 9H7z" },
  { label: "Ideas", transform: `rotateX(90deg) translateZ(${CUBE / 2}px)`, icon: "M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9V16h7v-2.1A6 6 0 0012 3z" },
  { label: "Growth", transform: `rotateX(-90deg) translateZ(${CUBE / 2}px)`, icon: "M4 19h16M6 16l4-5 3 3 5-7" },
];

const floatingCards = [
  { text: "Web Development", className: "left-[2%] top-[14%]", delay: 0 },
  { text: "Local SEO", className: "right-[0%] top-[22%]", delay: 0.8 },
  { text: "Mobile Apps", className: "left-[6%] bottom-[12%]", delay: 1.6 },
  { text: "AWS Cloud", className: "right-[6%] bottom-[8%]", delay: 2.4 },
];

function Cube() {
  return (
    <div className="relative mx-auto flex h-[340px] w-full max-w-[460px] items-center justify-center [perspective:900px] sm:h-[400px]">
      {/* Orbit rings */}
      <motion.div
        className="absolute h-[280px] w-[280px] rounded-full border border-sky-400/30 sm:h-[330px] sm:w-[330px]"
        style={{ rotateX: 70 }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_16px_#38bdf8]" />
      </motion.div>
      <motion.div
        className="absolute h-[230px] w-[230px] rounded-full border border-blue-500/30 sm:h-[270px] sm:w-[270px]"
        style={{ rotateX: 70, rotateY: 40 }}
        animate={{ rotateZ: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" />
      </motion.div>

      {/* Glow under the cube */}
      <div className="absolute bottom-[14%] h-10 w-56 rounded-[50%] bg-blue-500/40 blur-2xl" />

      <motion.div
        className="relative"
        style={{ width: CUBE, height: CUBE, transformStyle: "preserve-3d" }}
        animate={{ rotateX: [-20, -20], rotateY: [0, 360] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        {faces.map((face) => (
          <div
            key={face.label}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl border border-sky-300/40 bg-gradient-to-br from-blue-600/50 via-blue-900/60 to-[#050b16]/80 text-sky-200 shadow-[inset_0_0_40px_rgba(56,189,248,0.25)] backdrop-blur-sm"
            style={{ transform: face.transform, backfaceVisibility: "visible" }}
          >
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d={face.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">{face.label}</span>
          </div>
        ))}
      </motion.div>

      {floatingCards.map((card) => (
        <motion.span
          key={card.text}
          className={`absolute hidden rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:block ${card.className}`}
          animate={{ y: [0, -12, 0], rotateZ: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-400 align-middle" />
          {card.text}
        </motion.span>
      ))}
    </div>
  );
}

export default function BlogHero({ postCount }: { postCount: number }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#050b16] pb-12 pt-32 text-white lg:pb-16 lg:pt-36">
      <div className="pointer-events-none absolute left-1/3 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[420px] rounded-full bg-sky-400/10 blur-[130px]" />
      {/* Perspective grid floor */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 [perspective:600px]">
        <div className="absolute inset-x-[-50%] bottom-[-30%] h-[160%] origin-bottom bg-[linear-gradient(rgba(56,189,248,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.15)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_top,black,transparent)] [transform:rotateX(65deg)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1300px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div className="text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
            <SectionBadge variant="pill" tone="dark">
              Insights &amp; Ideas
            </SectionBadge>
          </motion.div>
                        
          <AnimatedHeading
            as="h1"
            text="The NeoSoftix Blog"
            highlightWords={["Blog"]}
            fontClass={playfair.className}
            dark
            className="justify-center text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:justify-start lg:text-6xl xl:text-7xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0"
          >
            Practical guides on web development, SEO, mobile apps, cloud and digital marketing, written by the
            team that builds them every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex items-center justify-center gap-8 lg:justify-start"
          >
            {[
              { value: `${postCount}+`, label: "Articles" },
              { value: "5", label: "Topics" },
              { value: "Free", label: "Expert Guides" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-slate-400 sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <Cube />
        </motion.div>
      </div>
    </section>
  );
}
