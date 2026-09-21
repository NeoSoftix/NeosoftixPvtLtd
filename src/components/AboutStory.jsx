"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

const coreValues = [
  {
    number: "01",
    title: "Engineering Excellence",
    desc: "We write clean, modular, and high-performance code built to scale seamlessly as your business grows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Client-Centric Co-Creation",
    desc: "We treat your business as our own, maintaining transparent communication and agile alignment at every phase.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Speed & Scalability",
    desc: "From MVP to global production deployment, we build fast, robust architectures that handle high concurrency with ease.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Continuous Innovation",
    desc: "We integrate cutting-edge cloud, AI, and digital frameworks to keep your products ahead of industry competitors.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
];

const teamPillars = [
  {
    title: "Strategy & Architecture",
    description: "Deep technical discovery, domain modeling, and cloud-native architecture setup.",
  },
  {
    title: "UI/UX & Product Design",
    description: "Intuitive user experiences designed for clarity, engagement, and conversion.",
  },
  {
    title: "Full-Stack Development",
    description: "Modern JavaScript, Next.js, mobile ecosystems, enterprise APIs, and secure backends.",
  },
  {
    title: "DevOps & Cloud Scale",
    description: "Automated CI/CD pipelines, AWS infrastructure, monitoring, and zero-downtime deployments.",
  },
];

export default function AboutStory() {
  return (
    <div className="relative w-full bg-[#f8fafc]">
      
      {/* SECTION 1: MISSION & VISION */}
      <section id="mission" className="relative w-full py-20 lg:py-32 overflow-hidden">
        {/* Subtle Background Lighting */}
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Asset Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative mx-auto aspect-[4/3] w-full max-w-xl rounded-3xl bg-gradient-to-br from-blue-500/20 via-sky-300/30 to-transparent p-2 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-white ring-1 ring-slate-900/10 shadow-inner">
                  <Image
                    src="/aboutlright.png"
                    alt="NeoSoftix Team Engineering Digital Solutions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain p-4"
                  />
                </div>
              </div>

              {/* Floating Glass Overlay Card */}
              <div className="absolute -bottom-6 -right-2 sm:bottom-4 sm:right-4 rounded-2xl bg-white/90 p-5 border border-slate-200/80 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-4 max-w-xs">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg">
                  100%
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Commitment</h4>
                  <p className="text-sm font-semibold text-[#0f1729]">Dedicated Product Teams for Every Project</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Story & Mission Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                OUR STORY & MISSION
              </div>

              <AnimatedHeading
                text="Bridging Visionary Ideas into High-Impact Software"
                highlightWords={["Visionary", "High-Impact"]}
                fontClass={playfair.className}
                className="text-3xl sm:text-5xl font-extrabold text-[#0f1729] leading-[1.15] tracking-tight"
              />

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
                Founded with a relentless drive for technical perfection, NeoSoftix empowers companies to innovate faster and scale smarter. We bridge the gap between complex engineering challenges and intuitive, elegant user interfaces.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                Whether launch-ready MVPs, enterprise mobile applications, or cloud automation pipelines, our team brings precision, passion, and performance to every line of code.
              </p>

              {/* Key Pillars Checklist */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teamPillars.map((pillar) => (
                  <div key={pillar.title} className="flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-200/80 shadow-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#0f1729]">{pillar.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 2: CORE VALUES & WHY CHOOSE US */}
      <section className="relative w-full bg-[#050b16] py-20 lg:py-32 text-white overflow-hidden">
        {/* Ambient Dark Glows */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[140px]" />
        
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className={`${playfair.className} text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3`}>
              What Drives NeoSoftix Forward
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300">
              Our culture is rooted in craftsmanship, transparency, and a commitment to delivering lasting value for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => (
              <motion.div
                key={val.number}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl bg-[#091326]/90 p-7 border border-white/10 backdrop-blur-xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-blue-500/50 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.25)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-sky-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {val.icon}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      {val.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">
                    {val.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                    {val.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                    Core Pillar
                  </span>
                  <span className="text-white text-xs font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read More →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
