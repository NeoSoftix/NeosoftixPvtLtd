"use client";

import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "Blogs", href: "/#blogs" },
  { name: "Contact Us", href: "/contact" },
];

const ourServices = [
  { name: "Mobile App Development", href: "/services" },
  { name: "Web Development", href: "/services" },
  { name: "Digital Marketing", href: "/services" },
  { name: "API Integration", href: "/services" },
  { name: "Software Development", href: "/services" },
  { name: "AWS", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-white py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Full Width Dark Blue Rounded Box with Side Gap */}
      <div className="relative w-full rounded-[32px] sm:rounded-[40px] bg-[#070e1b] border border-white/10 p-8 sm:p-12 lg:p-14 shadow-2xl">
        
        {/* Centered Inner Content Wrapper */}
        <div className="mx-auto w-full max-w-[1400px] relative">
          
          {/* Main Grid: Left Pill Cards + Right Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: 3 Sleek Pill Contact Cards (From Image 1) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            
            {/* Card 1: Book / Contact Us */}
            <a
              href="#contact"
              className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 sm:p-5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium block">
                  Get In Touch
                </span>
                <span className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  Book A Strategy Call
                </span>
              </div>
            </a>

            {/* Card 2: Phone */}
            <a
              href="tel:+918557062045"
              className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 sm:p-5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium block">
                  Call Us Directly
                </span>
                <span className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  +91-85570 62045
                </span>
              </div>
            </a>

            {/* Card 3: Email */}
            <a
              href="mailto:info@neosoftix.com"
              className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 sm:p-5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium block">
                  Email Support
                </span>
                <span className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  info@neosoftix.com
                </span>
              </div>
            </a>
          </div>

          {/* Right Columns: Brand Bio, Quick Links, Services, Location (From Image 2) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Quick Links Column */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-wide mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services Column */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-wide mb-4">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {ourServices.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors font-medium"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location & Contact Column */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-wide mb-4">
                Location
              </h4>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-400 font-medium">
                
                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <svg className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bestech+Business+Tower+Mohali+160062"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:text-white transition-colors"
                  >
                    A-817, 8th Floor, Bestech Business Tower, Mohali, 160062.
                  </a>
                </div>

                {/* Phone 1 */}
                <div className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a href="tel:+918557062045" className="hover:text-white transition-colors">
                    +91-85570 62045
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.146 4.187 4.289-1.126z"/>
                  </svg>
                  <a href="https://wa.me/918557062045" className="hover:text-white transition-colors">
                    +91-85570 62045
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a href="mailto:info@neosoftix.com" className="hover:text-white transition-colors">
                    info@neosoftix.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Brand Description & Social Icons Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Bio */}
          <div className="flex flex-col md:flex-row items-center gap-6 max-w-2xl text-center md:text-left">
            <a href="#">
              <Image
                src="/logo.png"
                alt="NeoSoftix"
                width={160}
                height={40}
                className="h-8 w-auto object-contain shrink-0"
              />
            </a>
            <p className="text-xs leading-relaxed text-slate-400 font-normal">
              NeoSoftix is a leading web development company delivering innovative,
              scalable, and user-friendly digital solutions tailored to business growth and success.
            </p>
          </div>

          {/* Social Icons (Facebook, X, Instagram, LinkedIn, Pinterest) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/neosoftix/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/neosoftix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-black hover:text-white hover:border-black transition-all"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/neo_softix/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/neosoftix/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://in.pinterest.com/neosoftix/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Info */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          
          <div>
            Copyright © 2026 NeoSoftix. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>

        </div>

        </div>
      </div>
    </footer>
  );
}
