"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./Button";

const megaMenuServices = [
  {
    name: "Mobile App Development",
    desc: "Build tailored iOS, Android & cross-platform apps",
    href: "/services/mobile-app-development",
    icon: "📱",
  },
  {
    name: "Web Development",
    desc: "Custom web applications & Next.js platforms",
    href: "/services/web-development",
    icon: "💻",
  },
  {
    name: "Digital Marketing",
    desc: "SEO, PPC ads & performance growth marketing",
    href: "/services/digital-marketing",
    icon: "📈",
  },
  {
    name: "Software Development",
    desc: "Tailored enterprise software & custom workflows",
    href: "/services/software-development",
    icon: "⚙️",
  },
  {
    name: "AWS",
    desc: "Tailored AWS cloud solutions & DevOps scale",
    href: "/services/aws",
    icon: "☁️",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out pointer-events-auto ${
        scrolled
          ? "bg-[#050b16]/95 backdrop-blur-xl border-b border-blue-900/40 shadow-2xl py-0 px-6 md:px-10 lg:px-16"
          : "bg-transparent py-6 px-6 md:px-10 lg:px-16"
      }`}
    >
      <div className="mx-auto flex w-full items-center justify-between 2xl:max-w-[1440px]">
        {/* Brand Logo */}
        <a href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="NeoSoftix"
            width={180}
            height={40}
            className={`w-auto object-contain transition-all duration-300 ease-in-out ${
              scrolled ? "h-6 sm:h-7" : "h-8 sm:h-9"
            }`}
            priority
          />
        </a>

        {/* Navigation Items (Desktop) */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-md lg:flex relative">
          <a
            href="/"
            className="rounded-full px-5 py-2.5 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            Home
          </a>

          <a
            href="/about"
            className="rounded-full px-5 py-2.5 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            About
          </a>

          {/* Services Nav Item with Interactive Mega Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="/services"
              className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-base font-medium transition-colors ${
                megaOpen
                  ? "bg-white/15 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>Services</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* 3D GLASS MEGA MENU DROPDOWN */}
            {megaOpen && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[90vw] max-w-[660px] rounded-3xl bg-[#071329]/95 border border-white/15 p-6 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                    OUR CORE SERVICES
                  </span>
                  <a
                    href="/services"
                    className="text-xs font-semibold text-white hover:text-sky-400 transition-colors"
                  >
                    Explore Services →
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {megaMenuServices.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMegaOpen(false)}
                      className="group flex items-start gap-3 rounded-2xl bg-white/5 p-3.5 border border-white/5 hover:bg-white/10 hover:border-sky-400/40 transition-all duration-200"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-lg border border-blue-500/30 group-hover:bg-blue-600 transition-colors">
                        {sub.icon}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                          {sub.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 font-normal">
                          {sub.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="/work"
            className="rounded-full px-5 py-2.5 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            Our Work
          </a>

          <a
            href="/contact"
            className="rounded-full px-5 py-2.5 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            Contact Us
          </a>
        </nav>

        {/* Action Button: Contact Us (Login and Get Started removed as requested) */}
        <div className="hidden items-center gap-6 lg:flex">
          <Button href="/contact" variant="light" size="sm" showArrow>
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {menuOpen ? (
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M1 4H17M1 9H17M1 14H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 z-50 flex h-dvh w-[82%] max-w-xs flex-col gap-1 overflow-y-auto border-l border-white/10 bg-[#0a1224] p-5 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="NeoSoftix"
            width={140}
            height={32}
            className="h-7 w-auto object-contain"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-2.5 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white"
        >
          Home
        </a>
        <a
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-2.5 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white"
        >
          About
        </a>
        <a
          href="/services"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-2.5 text-base font-bold text-sky-400 hover:bg-white/10"
        >
          Services
        </a>

        {/* Sub-Services in Mobile View */}
        <div className="ml-4 pl-3 border-l border-white/10 flex flex-col gap-2 my-1">
          {megaMenuServices.map((sub) => (
            <a
              key={sub.name}
              href={sub.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs text-slate-300 hover:text-white py-1 flex items-center gap-2"
            >
              <span>{sub.icon}</span>
              <span>{sub.name}</span>
            </a>
          ))}
        </div>

        <a
          href="/work"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-2.5 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white"
        >
          Our Work
        </a>
        <a
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="rounded-xl px-4 py-2.5 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white"
        >
          Contact Us
        </a>

        <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
          <Button
            href="/contact"
            onClick={() => setMenuOpen(false)}
            variant="light"
            size="sm"
            className="w-full font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
