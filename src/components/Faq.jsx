"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Caveat } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const scriptFont = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const faqs = [
  {
    id: 1,
    question: "1. What does Neosoftix do?",
    answer:
      "Neosoftix is a digital solutions company that helps businesses build modern web and mobile applications, create custom software, and turn ideas into powerful digital products.",
    icon: (
      <path
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 2,
    question: "2. Which industries does Neosoftix serve?",
    answer:
      "We serve a wide range of industries including E-Commerce, Healthcare, Restaurants & Hospitality, Logistics, Automotive, Finance, and fast-growing SaaS startups.",
    icon: (
      <path
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 3,
    question: "3. What makes Neosoftix different from other IT companies?",
    answer:
      "We assign a dedicated technical lead to every project, offer transparent milestone tracking, and focus on delivering measurable business progress within the first month.",
    icon: (
      <path
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5 5 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 4,
    question: "4. Do you provide ongoing support after project delivery?",
    answer:
      "Yes! We offer post-launch maintenance, 24/7 technical support, security updates, and continuous optimization to ensure your solution performs at its peak.",
    icon: (
      <path
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 5,
    question: "5. How long does it take to complete a project?",
    answer:
      "Timelines depend on project scope. Initial interactive prototypes are delivered within 2-3 weeks, with full production launches typically ranging from 4 to 8 weeks.",
    icon: (
      <path
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 6,
    question: "6. Do you offer custom software development?",
    answer:
      "Absolutely! We build tailor-made enterprise software, CRM platforms, workflow automation tools, and custom API integrations engineered specifically for your business.",
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
    id: 7,
    question: "7. Can Neosoftix develop mobile apps for both Android and iOS?",
    answer:
      "Yes, we specialize in native (iOS/Android) and cross-platform (React Native/Flutter) mobile app development to reach all your audience seamlessly.",
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
    id: 8,
    question: "8. Do you provide digital marketing services?",
    answer:
      "Yes, our digital marketing services include SEO, PPC advertising, social media strategy, content marketing, and conversion rate optimization (CRO).",
    icon: (
      <path
        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 9,
    question: "9. Will I get a dedicated team for my project?",
    answer:
      "Yes! You get a dedicated technical lead, UI/UX designer, software developers, and QA engineers committed exclusively to your project's success.",
    icon: (
      <path
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 10,
    question: "10. How do you ensure project quality?",
    answer:
      "We enforce strict code reviews, automated unit testing, end-to-end user acceptance testing (UAT), and rigorous security compliance checks.",
    icon: (
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const leftColumnFaqs = faqs.slice(0, 5);
  const rightColumnFaqs = faqs.slice(5, 10);

  return (
    <section
      id="faq"
      className="relative w-full bg-[#f4f8fd] py-20 lg:py-32 overflow-hidden"
    >
      <Image
        src="/faqbg.webp"
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover object-center"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Header Container */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white/80 px-4 py-1 text-xs font-bold tracking-widest text-blue-600 uppercase shadow-sm backdrop-blur-md mb-4">
              <span className="h-1.5 w-4 bg-blue-600 rounded-full" />
              FAQ
              <span className="h-1.5 w-4 bg-blue-600 rounded-full" />
            </div>

            {/* Title */}
            <AnimatedHeading
              text="Turning Your Questions Into Ideas"
              highlightWords={["Into", "Ideas"]}
              fontClass={playfair.className}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f1729] leading-tight tracking-tight justify-center"
            />

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              Find quick answers to the most common questions about our services,
              process, and how we turn your vision into reality.
            </p>
          </motion.div>
        </div>

        {/* 2 Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
          
          {/* Left Column (Q1 - Q5) */}
          <div className="flex flex-col space-y-4">
            {leftColumnFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.04)] border border-slate-200/80 transition-all duration-300 bg-white"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className={`w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#0b54b8] text-white"
                        : "bg-white text-[#0f1729] hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 pr-4">
                      {/* Icon */}
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-white/20 text-white"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          {faq.icon}
                        </svg>
                      </span>

                      {/* Question Text */}
                      <span className="text-sm sm:text-base font-bold tracking-tight">
                        {faq.question}
                      </span>
                    </div>

                    {/* Chevron Arrow */}
                    <span className="shrink-0 text-current">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="p-5 sm:p-6 pt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column (Q6 - Q10) */}
          <div className="flex flex-col space-y-4">
            {rightColumnFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.04)] border border-slate-200/80 transition-all duration-300 bg-white"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className={`w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#0b54b8] text-white"
                        : "bg-white text-[#0f1729] hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 pr-4">
                      {/* Icon */}
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-white/20 text-white"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          {faq.icon}
                        </svg>
                      </span>

                      {/* Question Text */}
                      <span className="text-sm sm:text-base font-bold tracking-tight">
                        {faq.question}
                      </span>
                    </div>

                    {/* Chevron Arrow */}
                    <span className="shrink-0 text-current">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="p-5 sm:p-6 pt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
