"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useSpring, useTransform, useMotionValue, useScroll } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

const servicesCards = [
  {
    step: "01",
    title: "Web Engineering",
    desc: "Custom high-converting web applications & platforms crafted for speed, scale, and conversion.",
    tag: "Development",
    icon: (
      <path
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    step: "02",
    title: "Mobile App Development",
    desc: "Tailored iOS, Android & cross-platform mobile apps engineered for seamless performance.",
    tag: "Mobile",
    icon: (
      <path
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    step: "03",
    title: "Digital Growth & SEO",
    desc: "Data-driven marketing, search engine rankings, and paid ad strategies that drive real revenue.",
    tag: "Marketing",
    icon: (
      <path
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    step: "04",
    title: "Cloud & AWS Solutions",
    desc: "Scalable cloud architecture, enterprise API integrations, and continuous 24/7 optimization.",
    tag: "Cloud",
    icon: (
      <path
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Hero() {
  const heroRef = useRef(null);

  // Mouse tilt 3D perspective effect for emblem on Slide 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-12, 12]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll progress for Hero section (200vh total height)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Slide 1 transformations (visible at 0 -> 0.25, fades out 0.25 -> 0.45, display none >= 0.45)
  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25, 0.45], [0, 0, -40]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0.95]);
  const pointerEvents1 = useTransform(scrollYProgress, (v) => (v < 0.45 ? "auto" : "none"));
  const display1 = useTransform(scrollYProgress, (v) => (v >= 0.45 ? "none" : "flex"));

  // Slide 2 transformations (display none < 0.35, fades in 0.38 -> 0.52, visible 0.52 -> 1.0)
  const opacity2 = useTransform(scrollYProgress, [0.38, 0.52, 1], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.38, 0.52, 1], [40, 0, 0]);
  const scale2 = useTransform(scrollYProgress, [0.38, 0.52, 1], [0.95, 1, 1]);
  const pointerEvents2 = useTransform(scrollYProgress, (v) => (v >= 0.45 ? "auto" : "none"));
  const display2 = useTransform(scrollYProgress, (v) => (v < 0.35 ? "none" : "flex"));

  // Scroll to Slide 2 action handler
  const scrollToSlide2 = () => {
    if (typeof window !== "undefined" && heroRef.current) {
      const heroTop = heroRef.current.offsetTop;
      const heroHeight = heroRef.current.offsetHeight;
      window.scrollTo({ top: heroTop + heroHeight * 0.4, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[200vh] bg-[#050b16]"
    >
      {/* Sticky viewport container (100vh lock) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Ambient Radial Background Lighting */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050b16] via-[#081329] to-[#050b16]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="pointer-events-none absolute left-1/3 top-1/3 h-[350px] w-[350px] rounded-full bg-sky-500/15 blur-[110px]" />

        {/* SLIDE 1: INITIAL HERO VIEW */}
        <motion.div
          style={{
            opacity: opacity1,
            y: y1,
            scale: scale1,
            pointerEvents: pointerEvents1,
            display: display1,
          }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16 xl:px-20 pt-16 transition-all duration-150"
        >
          <div className="relative mx-auto w-full max-w-4xl flex flex-col items-center">
            
            {/* 3D Animated Emblem */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative mb-6 flex h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 items-center justify-center rounded-[32px] bg-gradient-to-br from-white/20 via-white/10 to-white/0 p-4 backdrop-blur-xl border border-white/25 shadow-[0_20px_80px_rgba(59,130,246,0.35)]"
            >
              <div className="absolute inset-2 rounded-[24px] bg-[#071329]/85 border border-white/15 shadow-inner flex items-center justify-center p-4">
                <Image
                  src="/logo.png"
                  alt="NeoSoftix"
                  width={200}
                  height={75}
                  className="h-10 sm:h-14 w-auto object-contain filter drop-shadow-[0_8px_20px_rgba(59,130,246,0.6)]"
                  priority
                />
              </div>

              {/* Accent Glow Dots */}
              <div className="absolute top-3 left-3 h-2 w-2 rounded-full bg-sky-400 animate-ping" />
              <div className="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-blue-500" />
            </motion.div>

            {/* Sub-tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs sm:text-sm font-semibold tracking-widest text-sky-400 uppercase backdrop-blur-md mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              IDEAS TO IMPACT
            </div>

            {/* Main Clean Headline */}
            <h1
              className={`${playfair.className} text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight text-center`}
            >
              Turning concepts into{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                impactful digital experiences
              </span>
            </h1>

            <p className="mt-4 text-xs sm:text-base leading-relaxed text-slate-300 max-w-xl font-normal">
              Empowering global brands with custom software, mobile apps, and high-performance digital marketing solutions.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-[#050b16] shadow-xl transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-[1.04]"
              >
                Book An Appointment
                <svg
                  width="14"
                  height="14"
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

              <button
                onClick={scrollToSlide2}
                type="button"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
              >
                Explore Services
              </button>
            </div>

            {/* Scroll Down Hint Icon */}
            <button
              onClick={scrollToSlide2}
              type="button"
              className="mt-8 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity animate-bounce cursor-pointer"
            >
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Scroll Down
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-sky-400">
                <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

          </div>
        </motion.div>

        {/* SLIDE 2: SECOND SLIDE CARDS VIEW */}
        <motion.div
          style={{
            opacity: opacity2,
            y: y2,
            scale: scale2,
            pointerEvents: pointerEvents2,
            display: display2,
          }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16 xl:px-20 pt-16 transition-all duration-150"
        >
          <div className="relative mx-auto w-full max-w-[1400px] flex flex-col items-center">
            
            <div className="text-center mb-8">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                SERVICES WE OFFER
              </span>
              <h2
                className={`${playfair.className} text-3xl sm:text-5xl font-extrabold text-white mt-2`}
              >
                What We Build For You
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
              {servicesCards.map((card) => (
                <motion.div
                  key={card.step}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-3xl bg-[#091326]/90 p-6 sm:p-7 border border-white/10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] backdrop-blur-md flex flex-col justify-between hover:border-blue-500/50 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.2)] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          {card.icon}
                        </svg>
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        {card.step}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                      {card.tag}
                    </span>
                    <a
                      href="#services"
                      className="text-white text-xs font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    >
                      Learn More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
