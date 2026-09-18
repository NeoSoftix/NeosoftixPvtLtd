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
      "Shawn and the team at NeoSoftix have become an extension of our business. From SEO and paid advertising to website strategy and technical improvements, they consistently bring ideas that help us grow. Their hands-on approach and commitment to results have made them a valuable partner for Webb's Water Gardens.",
    name: "Kevin Webb",
    title: "President, Webb's Water Gardens",
  },
  {
    stars: 5,
    quote:
      "NeoSoftix has been a trusted marketing partner for Baltimore Windustrial. Shawn brings a rare combination of strategic thinking, technical expertise, and business understanding that allows him to quickly identify opportunities and execute solutions. Whether it's improving our online presence or optimizing our website, his team delivers professional results.",
    name: "Vince Brown",
    title: "President, Baltimore Windustrial",
  },
  {
    stars: 5,
    quote:
      "Working with NeoSoftix has helped us elevate our online presence and better position our brand in a highly competitive luxury travel market. Shawn understands how to balance technical SEO, user experience, and content strategy while keeping the customer journey front and center. His recommendations are thoughtful and data-driven.",
    name: "Angela Valenti",
    title: "Managing Director, Ourisman Travel",
  },
  {
    stars: 5,
    quote:
      "As a healthcare practice, we needed a marketing partner who understood the importance of trust, professionalism, and patient experience. NeoSoftix helped us strengthen our digital presence with clear strategy, practical recommendations, and responsive support. We appreciate having a partner we can rely on.",
    name: "Dr. Mike Smith",
    title: "Owner, The VIP PT",
  },
  {
    stars: 5,
    quote:
      "The team at NeoSoftix turned our outdated web platform into a modern, high-converting digital engine. Our lead generation skyrocketed within 60 days of launch, and their ongoing optimization keeps us ahead of competitors.",
    name: "Sarah Jenkins",
    title: "Founder, CleanTime Services",
  },
];

const bottomTestimonials = [
  {
    stars: 5,
    quote:
      "Phenomenal cloud architecture and custom software development. NeoSoftix delivered our enterprise platform ahead of schedule with flawless reliability, scalability, and security built in from day one.",
    name: "Marcus Brody",
    title: "CTO, Malo-Tech Germany",
  },
  {
    stars: 5,
    quote:
      "Their data-driven digital strategies transformed our acquisition pipeline completely. Working with NeoSoftix was one of the best ROI decisions our board made this year. Exceptional communication throughout!",
    name: "Elena Rostova",
    title: "Director of Growth, SuperSure Logistics",
  },
  {
    stars: 5,
    quote:
      "From prototype to production, the technical lead assigned to our project was outstanding. Seamless communication, top-tier engineering quality, and great ongoing post-launch support.",
    name: "David Miller",
    title: "Operations Lead, ParkEase Solutions",
  },
  {
    stars: 5,
    quote:
      "NeoSoftix rebuilt our multi-location restaurant ordering platform. Page speeds are blazing fast and our customer feedback has been overwhelmingly positive across all mobile and web channels.",
    name: "Rohit Sharma",
    title: "Founder, Angithi Hospitality Group",
  },
  {
    stars: 5,
    quote:
      "Highly creative, deeply strategic, and incredibly responsive. The continuous optimization team at NeoSoftix keeps our digital marketing campaigns performing at peak efficiency month after month.",
    name: "Amanda Croft",
    title: "VP of Marketing, NextGen Retail",
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
    <section className="relative w-full bg-[#050b16] py-20 lg:py-32 overflow-hidden border-t border-white/5">
      {/* Subtle background decorative glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-sky-600/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Header Container */}
      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20 text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedHeading
            text="Trusted by Industry Leaders"
            highlightWords={["Industry", "Leaders"]}
            fontClass={playfair.className}
            dark={true}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight justify-center"
          />

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 max-w-2xl mx-auto font-normal">
            Discover how NeoSoftix empowers businesses with tailored digital strategies, engineering excellence, and measurable growth.
          </p>
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
