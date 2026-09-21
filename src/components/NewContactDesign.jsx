"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
});

export default function NewContactDesign() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      id="contact-page"
      className="relative w-full bg-[#030914] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden text-white min-h-screen flex items-center justify-center"
    >
      {/* Background Decorative Vector Curved Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100 200 C 300 100, 400 600, 1500 200"
          stroke="#2563eb"
          strokeWidth="1.5"
        />
        <path
          d="M -50 400 C 500 200, 800 800, 1600 300"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
        <path
          d="M 600 -100 C 800 400, 1200 600, 1600 900"
          stroke="#1d4ed8"
          strokeWidth="1.5"
        />
      </svg>

      {/* 3D Floating Blue Paper Plane Graphic (Right Side Background) */}
      <div className="pointer-events-none absolute right-4 top-1/3 z-0 hidden lg:block opacity-80 transform rotate-12 scale-110">
        <svg width="220" height="220" viewBox="0 0 200 200" fill="none">
          <defs>
            <linearGradient id="planeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="planeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          <polygon points="20,100 180,30 110,160 90,115" fill="url(#planeGrad1)" filter="drop-shadow(0 20px 30px rgba(0,0,0,0.5))" />
          <polygon points="90,115 180,30 110,160" fill="url(#planeGrad2)" />
          <polygon points="90,115 110,160 100,180" fill="#172554" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Tag Header */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold tracking-[0.25em] text-sky-400 uppercase mb-4">
              <span>GET IN TOUCH</span>
              <span className="h-px w-12 bg-sky-500/40" />
            </div>

            {/* Main Title with AnimatedHeading & Doodle Arrow */}
            <div className="relative">
              <AnimatedHeading
                text="Let’s Build Something Great"
                highlightWords={["Something", "Great"]}
                fontClass={playfair.className}
                dark={true}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]"
              />

              {/* Hand-drawn Doodle Arrow Graphic */}
              <div className="absolute top-2 right-4 sm:right-16 hidden sm:block pointer-events-none">
                <svg width="64" height="64" viewBox="0 0 100 100" fill="none" className="text-sky-400">
                  <path
                    d="M 15 75 C 25 15, 65 15, 80 45"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 65 40 L 82 48 L 78 30"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300 max-w-lg font-normal">
              Have a project in mind, a question, or just want to say hello?
              <br />
              We’d love to hear from you. Reach out to us — our team is always here to help.
            </p>

            {/* Bottom 3 Feature Highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-start pr-2 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-400 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight">Quick Response</h4>
                <p className="mt-1 text-xs text-slate-400">We reply within 24 hours</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start pr-2 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-400 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight">Friendly Support</h4>
                <p className="mt-1 text-xs text-slate-400">Real people, not bots</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-400 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight">Custom Solutions</h4>
                <p className="mt-1 text-xs text-slate-400">Tailored to your needs</p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT COLUMN: White Floating Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 z-10"
          >
            <div className="w-full rounded-[32px] bg-white p-7 sm:p-10 text-[#050c1a] shadow-[0_25px_70px_rgba(0,0,0,0.4)] border border-slate-100">
              
              {/* Form Sub-header */}
              <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                SEND US A MESSAGE
              </span>

              {/* Form Title */}
              <h3 className={`${playfair.className} text-3xl sm:text-4xl font-bold text-[#050c1a] mt-1 tracking-tight`}>
                Drop Us a Note
              </h3>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                
                {/* Inputs Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Inputs Row 2: Phone & Select Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </span>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  {/* Select Service Dropdown */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                      </svg>
                    </span>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-10 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select Service</option>
                      <option value="web">Web Engineering</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="seo">Digital Growth & SEO</option>
                      <option value="cloud">Cloud & AWS Solutions</option>
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Textarea: Your Message */}
                <div className="relative">
                  <span className="absolute left-4 top-4 text-blue-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </span>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#041d45] hover:bg-[#031533] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.01]"
                  >
                    <span>{submitted ? "Message Sent Successfully! ✓" : "Send Message"}</span>
                    {!submitted && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2.5 8H13.5M13.5 8L8.5 3M13.5 8L8.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>

                {/* Lock Note */}
                <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-slate-400 pt-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span>Your information is safe with us.</span>
                </div>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
