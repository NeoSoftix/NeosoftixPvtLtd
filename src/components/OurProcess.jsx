"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const processSteps = [
  {
    stepNumber: "Step_1",
    stepIndex: "01",
    title: "Discover & Plan",
    description:
      "We start by understanding your business needs and goals. Together, we define the project scope, outline key requirements, and plan a clear roadmap to success.",
  },
  {
    stepNumber: "Step_2",
    stepIndex: "02",
    title: "Design & Prototype",
    description:
      "We create user-friendly designs and interactive prototypes that visualise your solution. This step ensures we align with your vision before development begins.",
  },
  {
    stepNumber: "Step_3",
    stepIndex: "03",
    title: "Develop & Test",
    description:
      "You are assigned a dedicated technical lead, and our expert team builds your solution, focusing on quality and reliability. We rigorously test every feature to ensure your software works seamlessly.",
  },
  {
    stepNumber: "Step_4",
    stepIndex: "04",
    title: "Launch & Train",
    description:
      "We deploy your software and provide training to your team, making sure you are fully equipped to use the solution from day one.",
  },
  {
    stepNumber: "Step_5",
    stepIndex: "05",
    title: "Support & Optimise",
    description:
      "After launch, we offer ongoing support and enhancements, ensuring your solution continues to perform optimally and adapts to your evolving needs.",
  },
];

function ProcessCard({ step, index, activeStep, setActiveStep }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    }
  }, [isInView, index, setActiveStep]);

  const isActive = activeStep === index;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative z-10 w-full rounded-3xl bg-white p-6 sm:p-8 lg:p-10 border transition-all duration-300 ${
        isActive
          ? "border-blue-500 shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)] scale-[1.01]"
          : "border-slate-200/80 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.05)] hover:border-slate-300"
      }`}
    >
      {/* Top Step Badge (matching video: ↓ Step_1) */}
      <div
        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide border transition-colors ${
          isActive
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-slate-100 text-slate-700 border-slate-200/80"
        }`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="transition-transform"
        >
          <path
            d="M6 2.5V9.5M6 9.5L2.5 6M6 9.5L9.5 6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{step.stepNumber}</span>
      </div>

      {/* Title */}
      <h3
        className={`mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors ${
          isActive ? "text-blue-600" : "text-[#0f1729]"
        }`}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="our-process"
      className="relative w-full bg-[#f8fafc] py-16 lg:py-24"
    >
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Main Grid: items-start allows sticky left column to slide smoothly alongside tall right column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          
          {/* STICKY LEFT COLUMN: Stays pinned while right side cards scroll past */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start py-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                Our Working Process
              </div>

              <AnimatedHeading
                text="Our Process"
                highlightWords={["Process"]}
                fontClass={playfair.className}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f1729] leading-[1.12] tracking-tight"
              />

              {/* Subtitle / Description */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 max-w-lg font-normal">
                You can begin seeing progress within the first month—from initial
                demo to a fully live solution. From the start, we stay adaptable
                and responsive, adjusting quickly to your evolving requirements.
              </p>

              {/* Live Step Navigation / Indicators */}
              <div className="mt-10 hidden sm:flex flex-col gap-4 max-w-xs pt-6 border-t border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <span>Current Phase</span>
                  <span className="text-blue-600 font-bold">
                    {processSteps[activeStep].stepIndex} / {processSteps.length.toString().padStart(2, "0")}
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-600 rounded-full"
                    animate={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>

                {/* Step List Pills */}
                <div className="mt-2 flex flex-col gap-2">
                  {processSteps.map((s, i) => (
                    <div
                      key={s.stepNumber}
                      className={`text-xs font-semibold flex items-center gap-2 transition-colors ${
                        i === activeStep ? "text-blue-600 font-bold" : "text-slate-400"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          i === activeStep ? "bg-blue-600" : "bg-slate-300"
                        }`}
                      />
                      {s.title}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Stack of 5 process cards that scroll past */}
          <div className="lg:col-span-7 relative flex flex-col space-y-10 sm:space-y-14 lg:space-y-16 py-2">
            {/* Dashed connecting line */}
            <div className="absolute left-10 top-12 bottom-12 w-0.5 border-l-2 border-dashed border-slate-300 pointer-events-none z-0 hidden md:block" />

            {processSteps.map((step, idx) => (
              <ProcessCard
                key={step.stepNumber}
                step={step}
                index={idx}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
