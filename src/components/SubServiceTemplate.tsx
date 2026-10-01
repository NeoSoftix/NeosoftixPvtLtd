"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Button from "./Button";
import OurProcess from "./OurProcess";
import PageHero from "./PageHero";
import type { SubService } from "@/data/subServicesData";
import { playfair } from "@/lib/fonts";
import SectionBadge from "./SectionBadge";

export default function SubServiceTemplate({ data }: { data?: SubService }) {
  if (!data) return null;

  return (
    <div className="relative w-full bg-[#050b16] text-white">
      
      <PageHero
        badge={data.badge}
        title={data.title}
        highlightWords={data.title.split(" ").slice(-2)}
        tagline={data.tagline}
        description={data.description}
        primaryCta={{ href: "/contact", label: "Contact Us" }}
        stats={data.heroStats.map((stat) => ({ value: stat.number, label: stat.label }))}
      >
        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto"
        >
          {data.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-sky-300 border border-white/15 backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </PageHero>

      {/* DELIVERABLES & FEATURES SECTION (Clean Crisp Light-Grey Theme) */}
      <section className="relative w-full bg-white py-12 lg:py-16 text-[#0f1729] overflow-x-clip">
        <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionBadge variant="plain" tone="light">DELIVERABLES & GUARANTEES</SectionBadge>
            <h2 className={`${playfair.className} text-3xl sm:text-4xl font-extrabold text-[#0f1729] mt-2`}>
              What You Get With {data.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 font-bold">
                  ✓
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-800">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS SECTION (per-service content) */}
      {data.process && (
        <OurProcess
          badge={`Our ${data.title} Process`}
          title="Our Process"
          highlightWords={["Process"]}
          description={data.process.description}
          steps={data.process.steps}
        />
      )}

    </div>
  );
}
