"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it Works", href: "#our-process" },
  { label: "Resources", href: "#resources" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full px-6 py-6 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full items-center justify-between 2xl:max-w-[1440px]">
        <a href="#" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="NeoSoftix"
            width={180}
            height={40}
            className="h-8 w-auto object-contain sm:h-9"
            priority
          />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-5 py-2.5 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#login"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Login
          </a>
          <a
            href="#get-started"
            className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#050b16] transition-transform hover:scale-[1.03]"
          >
            Get Started
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
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

      {menuOpen && (
        <div className="mt-4 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#0a1224]/95 p-3 backdrop-blur-md lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
            <a
              href="#login"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-center text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
            >
              Login
            </a>
            <a
              href="#get-started"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#050b16]"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
