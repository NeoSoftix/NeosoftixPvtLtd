"use client";

import { useState, useActionState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AnimatedHeading from "./AnimatedHeading";
import Button from "./Button";
import { submitHomeContactForm } from "@/app/actions/contact";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const FlagIndia = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} rounded-full overflow-hidden shrink-0 shadow-sm border border-slate-200`} viewBox="0 0 640 480">
    <path fill="#f93" d="M0 0h640v160H0z"/>
    <path fill="#fff" d="M0 160h640v160H0z"/>
    <path fill="#128807" d="M0 320h640v160H0z"/>
    <circle cx="320" cy="240" r="56" fill="none" stroke="#000080" strokeWidth="12"/>
  </svg>
);

const FlagGermany = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} rounded-full overflow-hidden shrink-0 shadow-sm border border-slate-200`} viewBox="0 0 640 480">
    <path fill="#000" d="M0 0h640v160H0z"/>
    <path fill="#d00" d="M0 160h640v160H0z"/>
    <path fill="#ffce00" d="M0 320h640v160H0z"/>
  </svg>
);

const FlagEurope = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} rounded-full overflow-hidden shrink-0 shadow-sm border border-slate-200`} viewBox="0 0 640 480">
    <path fill="#003399" d="M0 0h640v480H0z"/>
    <circle cx="320" cy="240" r="120" fill="none"/>
    <circle cx="320" cy="120" r="10" fill="#ffcc00"/>
    <circle cx="320" cy="360" r="10" fill="#ffcc00"/>
    <circle cx="200" cy="240" r="10" fill="#ffcc00"/>
    <circle cx="440" cy="240" r="10" fill="#ffcc00"/>
    <circle cx="235" cy="155" r="10" fill="#ffcc00"/>
    <circle cx="405" cy="325" r="10" fill="#ffcc00"/>
    <circle cx="235" cy="325" r="10" fill="#ffcc00"/>
    <circle cx="405" cy="155" r="10" fill="#ffcc00"/>
  </svg>
);

const regions = [
  {
    id: "india",
    code: "INDIA",
    name: "INDIA",
    FlagIcon: FlagIndia,
    title: "INDIA",
  },
  {
    id: "germany",
    code: "GERMANY",
    name: "GERMANY",
    FlagIcon: FlagGermany,
    title: "GERMANY",
  },
  {
    id: "europe",
    code: "EUROPE",
    name: "EUROPE",
    FlagIcon: FlagEurope,
    title: "EUROPE",
  },
];

export default function Contact() {
  const [selectedRegion, setSelectedRegion] = useState(regions[2]); // EUROPE selected by default
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });
  const [state, formAction, pending] = useActionState(submitHomeContactForm, undefined);

  const SelectedFlag = selectedRegion.FlagIcon;

  return (
    <section
      id="contact"
      className="relative w-full bg-white py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Title, Country Wizard & Contact Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              LET'S TALK
            </div>

            {/* Main Title */}
            <AnimatedHeading
              text="Contact Us"
              highlightWords={["Us"]}
              fontClass={playfair.className}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f1729] leading-tight tracking-tight"
            />

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl font-normal">
              Skip the back-and-forth. Reach out directly and we’ll discuss your goals,
              review your current setup, and share clear next steps.
            </p>

            {/* COUNTRY WIZARD SELECTOR BOX */}
            <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm max-w-xl">
              
              {/* Selected Country Flag Icon Box & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm p-2">
                  <SelectedFlag className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f1729] tracking-tight">
                    {selectedRegion.title}
                  </h3>
                </div>
              </div>

              {/* 4 COUNTRY WIZARD TABS IN 1 SINGLE HORIZONTAL LINE */}
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-200/80">
                {regions.map((reg) => {
                  const isSelected = selectedRegion.id === reg.id;
                  const IconComp = reg.FlagIcon;
                  return (
                    <button
                      key={reg.id}
                      type="button"
                      onClick={() => setSelectedRegion(reg)}
                      className={`flex items-center justify-center gap-1.5 rounded-full py-2.5 px-2 text-xs font-bold tracking-wide transition-all duration-300 ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                          : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400 hover:bg-slate-100"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                      <span className="hidden sm:inline">{reg.name}</span>
                      <span className="sm:hidden">{reg.code.substring(0, 3)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Left Side CTA Button */}
            <div className="mt-8">
              <Button href="#contact-form" variant="dark" size="lg" showArrow className="text-sm sm:text-base">
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
            id="contact-form"
          >
            <div className="w-full rounded-3xl bg-white p-7 sm:p-10 text-[#0f1729] shadow-[0_15px_40px_-15px_rgba(15,23,42,0.12)] border border-slate-200/90">
              
              {/* Top Tag Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-600 mb-6">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                Get In Touch
              </div>

              {/* Form Heading */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f1729] tracking-tight">
                Send us a message
              </h3>

              {/* Form Fields */}
              <form action={formAction} className="mt-6 space-y-4">
                <input type="hidden" name="region" value={selectedRegion.name} />

                {/* 2 Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-[#0f1729] placeholder-slate-400 focus:bg-[#fff] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-[#0f1729] placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-[#0f1729] placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="website"
                      placeholder="Website"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-[#0f1729] placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="What do you need help with?*"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-[#0f1729] placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>

                {/* Privacy & Response Disclaimer */}
                <p className="text-xs leading-relaxed text-slate-500 pt-1 font-normal">
                  We reply within 1 business day. By submitting, you agree to our{" "}
                  <a href="/privacy-policy" className="underline hover:text-blue-600">
                    Privacy Policy
                  </a>
                  .
                </p>

                {state?.error && (
                  <p className="text-sm text-red-600" role="alert">
                    {state.error}
                  </p>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="dark"
                    size="md"
                    disabled={pending}
                    className="w-full sm:w-auto text-sm"
                  >
                    {pending ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
