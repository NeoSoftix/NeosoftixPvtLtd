"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const services = [
  {
    number: "01",
    title: "Mobile App Development",
    description:
      "Build a tailored iOS, Android, or cross-platform app — crafted for performance, accuracy, and cost-efficiency.",
    rotate: 6,
    href: "/services/mobile-app-development",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Our custom web design and development services are crafted to suit your specific business requirements.",
    rotate: -7,
    href: "/services/web-development",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Elevate your business with advanced digital strategies that boost performance, creativity, and growth potential.",
    rotate: 5,
    href: "/services/digital-marketing",
  },
  {
    number: "04",
    title: "Software Development",
    description:
      "Create tailored software solutions to solve unique business needs and enhance overall efficiency.",
    rotate: -6,
    href: "/services/software-development",
  },
  {
    number: "05",
    title: "AWS",
    description:
      "Enable your organization to innovate faster, adapt quickly to change, and scale efficiently with fully tailored AWS cloud solutions.",
    rotate: 5,
    href: "/services/aws",
  },
];

function ServiceCard({ service, pinRef, className = "" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        rotate: hovered ? 0 : service.rotate,
        y: hovered ? -6 : 0,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`relative w-full max-w-[340px] sm:max-w-[360px] rounded-[28px] sm:rounded-[34px] bg-white p-3.5 sm:p-4 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.12)] border border-slate-200/60 transition-shadow duration-300 hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.2)] ${className}`}
    >
      {/* Top Pin Marker */}
      <span
        ref={pinRef}
        className="absolute -top-4 left-1/2 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-[2.5px] border-[#1e293b] bg-white shadow-sm"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#1e293b]" />
      </span>

      {/* Inner Beige Card */}
      <div className="rounded-[22px] sm:rounded-[26px] bg-[#efeeea] p-5 sm:p-7 text-left">
        <span className="text-sm sm:text-base font-medium text-slate-500">
          {service.number}
        </span>
        <h3 className="mt-1.5 text-xl sm:text-2xl font-extrabold leading-snug text-[#0f1729] tracking-tight">
          {service.title}
        </h3>
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
          {service.description}
        </p>
        <a
          href={service.href || "#"}
          className="mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#3b82f6] hover:text-blue-700 transition-colors group"
        >
          Learn More
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
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef(null);
  const desktopPinRefs = useRef([]);
  const [paths, setPaths] = useState([]);

  const updateLines = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const coords = [];

    for (let i = 0; i < services.length; i++) {
      const pin = desktopPinRefs.current[i];
      if (pin && pin.getBoundingClientRect) {
        const rect = pin.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          coords.push({
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top,
          });
        }
      }
    }

    if (coords.length < 2) return;

    const newPaths = [];
    for (let i = 0; i < coords.length - 1; i++) {
      const p1 = coords[i];
      const p2 = coords[i + 1];
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const cx1 = p1.x + dx * 0.5;
      const cy1 = p1.y + dy * 0.1;
      const cx2 = p1.x + dx * 0.5;
      const cy2 = p1.y + dy * 0.9;
      newPaths.push(
        `M ${p1.x},${p1.y} C ${cx1},${cy1} ${cx2},${cy2} ${p2.x},${p2.y}`
      );
    }
    setPaths(newPaths);
  }, []);

  useEffect(() => {
    updateLines();
    const t1 = setTimeout(updateLines, 100);
    const t2 = setTimeout(updateLines, 300);
    const t3 = setTimeout(updateLines, 800);

    const handleResize = () => updateLines();
    window.addEventListener("resize", handleResize);

    let resizeObserver;
    if (containerRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => updateLines());
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [updateLines]);

  return (
    <section id="services" className="relative w-full bg-[#f4f3ef] py-16 lg:py-24 overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20"
      >
        {/* SVG Dashed Lines Overlay */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none z-0 hidden lg:block"
          fill="none"
        >
          {paths.map((pathD, idx) => (
            <path
              key={idx}
              d={pathD}
              stroke="#64748b"
              strokeWidth="3"
              strokeDasharray="9 7"
              strokeLinecap="round"
            />
          ))}
        </svg>

        {/* Desktop Staggered Layout (lg+) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-20 relative z-10">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="max-w-md pb-12"
            >
              <AnimatedHeading
                text="Your Digital Presence"
                highlightWords={["Digital"]}
                className="text-4xl sm:text-5xl font-extrabold leading-[1.15] tracking-tight text-[#0f1729]"
              />
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Choose the services you need — from building high-converting
                websites to scaling your business with data-driven strategies.
              </p>
            </motion.div>

            {/* Card 02 */}
            <div className="mt-24 xl:mt-32 w-full flex justify-start">
              <ServiceCard
                service={services[1]}
                pinRef={(el) => (desktopPinRefs.current[1] = el)}
              />
            </div>

            {/* Card 04 */}
            <div className="mt-28 xl:mt-40 w-full flex justify-start">
              <ServiceCard
                service={services[3]}
                pinRef={(el) => (desktopPinRefs.current[3] = el)}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-end">
            {/* Card 01 */}
            <div className="w-full flex justify-end">
              <ServiceCard
                service={services[0]}
                pinRef={(el) => (desktopPinRefs.current[0] = el)}
              />
            </div>

            {/* Card 03 */}
            <div className="mt-28 xl:mt-40 w-full flex justify-end">
              <ServiceCard
                service={services[2]}
                pinRef={(el) => (desktopPinRefs.current[2] = el)}
              />
            </div>

            {/* Card 05 */}
            <div className="mt-28 xl:mt-40 w-full flex justify-end">
              <ServiceCard
                service={services[4]}
                pinRef={(el) => (desktopPinRefs.current[4] = el)}
              />
            </div>

            {/* Delivered text */}
            <div className="mt-16 text-right pr-4">
              <span className="text-sm font-semibold italic text-slate-700 font-serif">
                Ready to be delivered !
              </span>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Layout (< lg) */}
        <div className="flex flex-col lg:hidden space-y-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full text-left max-w-[360px]"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1729] leading-tight">
              Your <span className="text-[#3b82f6]">Digital</span> Presence
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Choose the services you need — from building high-converting
              websites to scaling your business with data-driven strategies.
            </p>
          </motion.div>

          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}

          <div className="pt-4 text-center">
            <span className="text-sm font-semibold italic text-slate-700 font-serif">
              Ready to be delivered !
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
