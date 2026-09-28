"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Button from "./Button";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

export default function WorkCTA() {
  return (
    <section className="relative w-full bg-[#050b16] py-14 lg:py-20 overflow-hidden text-white">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] sm:rounded-[44px] bg-gradient-to-r from-[#0a1835] via-[#091f48] to-[#07132b] p-8 sm:p-14 lg:p-16 border border-white/10 shadow-2xl text-center overflow-hidden"
        >
          {/* Subtle Glows */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-sky-400/20 blur-2xl" />

          <span className="text-xs font-extrabold tracking-[0.2em] text-sky-400 uppercase block mb-3">
            LET&apos;S BUILD SOMETHING GREAT
          </span>

          <h2 className={`${playfair.className} text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mx-auto`}>
            Have a Project in Mind?
          </h2>

          <p className="mt-4 text-sm sm:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            We&apos;d love to hear about your ideas and help you turn them into a successful digital product.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              href="/contact"
              variant="dark"
              size="lg"
              showArrow
              className="bg-blue-600 hover:bg-white hover:text-[#050b16]"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
