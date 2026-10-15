"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Button from "./Button";
import { playfair, scriptFont } from "@/lib/fonts";
import { partnerClients } from "@/data/projects";

const iconProps = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const features = [
  {
    label: "Strong Partnerships",
    icon: (
      <path
        d="M8 12l2.5 2.5L16 9M3 8l4-4h4l2 2M21 8l-4-4h-4l-2 2M3 8v6a2 2 0 002 2h1M21 8v6a2 2 0 01-2 2h-1"
        {...iconProps}
      />
    ),
  },
  {
    label: "Lasting Trust",
    icon: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z M9 12l2 2 4-4" {...iconProps} />,
  },
  {
    label: "Shared Success",
    icon: (
      <path
        d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L12 3z"
        {...iconProps}
      />
    ),
  },
];

const industries = [
  {
    label: ["Restaurant &", "Food"],
    icon: <path d="M5 4l14 16M19 4L5 20M8 4.5a3 3 0 010 4.2M16 4.5a3 3 0 000 4.2" {...iconProps} />,
  },
  {
    label: ["E-Commerce &", "Retail"],
    icon: <path d="M5 8h14l-1 12H6L5 8zM9 8V6a3 3 0 016 0v2" {...iconProps} />,
  },
  {
    label: ["Real Estate &", "Services"],
    icon: <path d="M3 11l9-7 9 7M5 9.5V20h5v-6h4v6h5V9.5" {...iconProps} />,
  },
  {
    label: ["Health &", "Wellness"],
    icon: (
      <path
        d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"
        {...iconProps}
      />
    ),
  },
  {
    label: ["And More", "..."],
    icon: (
      <g fill="currentColor">
        {[6, 12, 18].flatMap((y) =>
          [6, 12, 18].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />)
        )}
      </g>
    ),
  },
];

// Logo tiles spread evenly on an ellipse around the glass dome (positions are % of the scene box).
const tiles = partnerClients.map((client, i) => {
  const angle = (i / partnerClients.length) * 2 * Math.PI - Math.PI / 2;
  const x = 50 + 37 * Math.cos(angle);
  const y = 49 + 34 * Math.sin(angle);
  return { client, x, y, tilt: (x - 50) / 5 };
});

function PartnerScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-[1/0.85] w-full max-w-[360px] sm:max-w-[520px] lg:max-w-[640px]"
    >
      {/* Glass dome */}
      <div className="absolute left-1/2 top-[2%] aspect-square w-[78%] -translate-x-1/2 rounded-full border border-white/80 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.9),rgba(219,234,254,0.55)_55%,rgba(191,219,254,0.35))] shadow-[inset_0_0_60px_rgba(255,255,255,0.9),0_30px_80px_rgba(37,99,235,0.12)]" />

      {/* Podium */}
      <div className="absolute bottom-[3%] left-1/2 h-[20%] w-[92%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-white to-blue-100/70 shadow-[0_25px_50px_rgba(37,99,235,0.18)]" />
      <div className="absolute bottom-[7%] left-1/2 h-[15%] w-[80%] -translate-x-1/2 rounded-[50%] border-[3px] border-blue-400/60 bg-gradient-to-b from-blue-50 to-white shadow-[0_0_30px_rgba(59,130,246,0.45),inset_0_0_20px_rgba(59,130,246,0.25)]" />

      {/* Floating spheres */}
      <motion.span
        className="absolute left-[4%] top-[26%] h-4 w-4 rounded-full bg-[radial-gradient(circle_at_30%_30%,#93c5fd,#2563eb)] shadow-[0_6px_14px_rgba(37,99,235,0.4)] sm:h-6 sm:w-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute right-[1%] top-[37%] h-6 w-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,#93c5fd,#2563eb)] shadow-[0_8px_18px_rgba(37,99,235,0.4)] sm:h-9 sm:w-9"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Handwritten note */}
      <div
        className={`${scriptFont.className} absolute -top-[4%] right-[0%] hidden -rotate-12 text-right text-lg leading-tight text-blue-600 sm:block lg:text-xl`}
        style={{ textTransform: "none" }}
      >
        Different industries
        <br />
        <span className="mr-6">One vision</span>
        <svg width="50" height="46" viewBox="0 0 50 46" fill="none" className="ml-auto mr-10 rotate-12">
          <path d="M40 2c6 18-4 34-30 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 34l-6 6 8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Center glass card */}
      <div className="absolute left-1/2 top-[48%] flex h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[8%] rounded-[1.25rem] border border-white/90 bg-white/55 px-[4%] shadow-[0_20px_50px_rgba(37,99,235,0.15),inset_0_0_30px_rgba(255,255,255,0.9)] backdrop-blur-md sm:rounded-3xl">
        {/* logo.png is white text for dark backgrounds: darken the wordmark, keep the coloured "o" icon */}
        <div className="relative w-[88%]">
          <Image src="/logo.png" alt="NeoSoftix" width={1024} height={164} className="h-auto w-full brightness-0" />
          <Image
            src="/logo.png"
            alt=""
            aria-hidden
            width={1024}
            height={164}
            className="absolute inset-0 h-auto w-full"
            style={{ clipPath: "inset(0 35% 0 50.8%)" }}
          />
        </div>
        <span className="text-center text-[6px] font-semibold uppercase leading-relaxed tracking-[0.3em] text-slate-600 sm:text-[9px] lg:text-[10px]">
          Building Success
          <br />
          Together
        </span>
        <span className="h-px w-[18%] bg-blue-400" />
      </div>

      {/* Logo tiles */}
      {tiles.map(({ client, x, y, tilt }, i) => (
        <div
          key={client.name}
          className="absolute w-[15%] -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            whileHover={{ scale: 1.08 }}
          >
          <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            title={client.url ? `Visit ${client.name}` : client.name}
            style={{ transform: `perspective(600px) rotateY(${tilt}deg)` }}
            className={`flex aspect-[5/4] items-center justify-center rounded-xl p-[12%] shadow-[0_12px_24px_rgba(15,23,41,0.18),0_3px_0_rgba(15,23,41,0.08)] ring-1 ring-black/5 sm:rounded-2xl ${
              client.darkLogo ? "bg-[#111827]" : "bg-white"
            } ${client.url ? "cursor-pointer" : "pointer-events-none"}`}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={140}
              height={112}
              className="h-full w-full object-contain"
            />
          </a>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}

export default function TrustedBy() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8f7f3]">
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-blue-200/70" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[70%] w-[38%] bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.9)_0_2px,transparent_2px_14px)] [mask-image:linear-gradient(to_left,black,transparent)] lg:block" />

      <div className="relative mx-auto w-full px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 2xl:max-w-[1440px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.35em] text-blue-600 sm:text-sm">
              <span className="h-px w-10 bg-blue-600 sm:w-12" />
              OUR TRUSTED PARTNERS
            </div>

            <div className="mt-6">
              <AnimatedHeading
                text="Trusted by Great Businesses"
                highlightWords={["Great", "Businesses"]}
                italicHighlight
                fontClass={playfair.className}
                className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0f1729] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
              />
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
              We are proud to collaborate with amazing brands across different
              industries. Their trust inspires us to deliver excellence every
              day.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-5">
              {features.map((feature, i) => (
                <div key={feature.label} className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.1)]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        {feature.icon}
                      </svg>
                    </span>
                    <span className="max-w-[7rem] text-[11px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-slate-800">
                      {feature.label}
                    </span>
                  </div>
                  {i < features.length - 1 && <span className="hidden h-10 w-px bg-slate-300 sm:block" />}
                </div>
              ))}
            </div>

            <Button
              href="#partners"
              variant="dark"
              size="md"
              showArrow
              className="mt-10 text-sm font-semibold shadow-[0_12px_28px_rgba(5,11,22,0.25)]"
            >
              Our Partners
            </Button>
          </motion.div>

          <PartnerScene />
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-8 rounded-3xl bg-white/80 px-6 py-7 shadow-[0_20px_50px_rgba(15,23,41,0.06)] ring-1 ring-slate-100 backdrop-blur-sm sm:px-10 lg:flex-row lg:items-center lg:gap-10 lg:px-14"
        >
          <div className="flex shrink-0 items-center gap-6 lg:gap-10">
            <span className={`${playfair.className} text-5xl font-bold text-blue-700 sm:text-6xl`}>12+</span>
            <span className="whitespace-nowrap text-xs font-semibold uppercase leading-loose tracking-[0.35em] text-blue-600 sm:text-sm">
              Brands Growing
              <br />
              With Us
            </span>
          </div>

          <span className="hidden h-16 w-px bg-slate-200 lg:block" />

          <div className="grid flex-1 grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:flex lg:justify-between">
            {industries.map((industry) => (
              <div key={industry.label[0]} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-50 text-blue-600 shadow-[0_4px_12px_rgba(15,23,41,0.06)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {industry.icon}
                  </svg>
                </span>
                <span className="whitespace-nowrap text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-slate-600 sm:text-[11px]">
                  {industry.label[0]}
                  <br />
                  {industry.label[1]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
