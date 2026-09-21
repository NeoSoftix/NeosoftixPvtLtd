"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const topTestimonials = [
  {
    stars: 5,
    quote:
      "Neosoftix completely transformed our online presence. Their team delivered a high-quality website on time, and the results exceeded our expectations. Highly recommended!",
    name: "Zoe Mantis",
    title: "Director",
  },
  {
    stars: 5,
    quote:
      "Professional, responsive, and result-driven. The team at Neosoftix helped us increase our website traffic and generate real leads within a short time.",
    name: "John Doe",
    title: "Managing Director",
  },
  {
    stars: 5,
    quote:
      "Working with Neosoftix was a great experience. Their design and development skills are top-notch, and they truly understand business needs.",
    name: "Don Joe",
    title: "Marketing Head",
  },
];

const bottomTestimonials = [
  {
    stars: 5,
    quote:
      "Our sales improved significantly after launching our new website. Neosoftix delivered exactly what we needed with excellent support.",
    name: "Karan Singh",
    title: "Additional Director",
  },
  {
    stars: 5,
    quote:
      "Neosoftix delivered exactly what we needed. Their attention to detail and creative approach made our website stand out from competitors.",
    name: "Priya Mehta",
    title: "HR",
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-current sm:h-5 sm:w-5"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="w-[340px] sm:w-[420px] lg:w-[460px] shrink-0 mx-3 sm:mx-4 rounded-2xl sm:rounded-3xl bg-[#0c1427]/90 p-6 sm:p-8 border border-white/10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between backdrop-blur-md hover:border-sky-500/40 transition-colors">
      <div>
        {/* Star Rating */}
        <StarRating count={item.stars} />

        {/* Quote Text */}
        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
          {item.quote}
        </p>
      </div>

      {/* Author Footer */}
      <div className="mt-6 border-t border-white/10 pt-4">
        <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
          {item.name}
        </h4>
        <p className="mt-0.5 text-xs text-slate-400 font-medium">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate arrays to create a seamless infinite loop with 0 gaps
  const row1Items = [...topTestimonials, ...topTestimonials, ...topTestimonials];
  const row2Items = [...bottomTestimonials, ...bottomTestimonials, ...bottomTestimonials];

  return (
    <section className="relative w-full bg-[#050b16] py-16 lg:py-24 overflow-hidden border-t border-white/5">
      {/* Subtle background decorative glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-sky-600/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Header Container */}
      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20 text-center mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-sky-400 uppercase mb-3">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            Our Testimonials
          </div>

          <AnimatedHeading
            text="Hear From Those Who've Worked With Us"
            highlightWords={["Worked"]}
            fontClass={playfair.className}
            dark={true}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight justify-center"
          />
        </motion.div>
      </div>

      {/* Sliders Wrapper with Left & Right Gradient Blur Overlays */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 sm:gap-8">
        
        {/* Left Side Blur Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 md:w-60 lg:w-80 bg-gradient-to-r from-[#050b16] via-[#050b16]/85 to-transparent z-20" />

        {/* Right Side Blur Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 md:w-60 lg:w-80 bg-gradient-to-l from-[#050b16] via-[#050b16]/85 to-transparent z-20" />

        {/* TOP SLIDER: Continuous Infinite Movement to the Left */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-left">
            {row1Items.map((item, idx) => (
              <TestimonialCard key={`top-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* BOTTOM SLIDER: Continuous Infinite Movement to the Right */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-right">
            {row2Items.map((item, idx) => (
              <TestimonialCard key={`bottom-${idx}`} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
