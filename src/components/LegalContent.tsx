"use client";

import { playfair } from "@/lib/fonts";


export type LegalSection = { title: string; body: string[] };

type LegalContentProps = {
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalContent({ lastUpdated, sections }: LegalContentProps) {
  return (
    <section className="relative w-full bg-slate-50 py-12 sm:py-14 lg:py-16 overflow-x-clip">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-10">
        <p className="text-sm font-medium text-slate-500 mb-10">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h2
                className={`${playfair.className} text-xl sm:text-2xl font-bold text-[#0f1729] tracking-tight mb-3`}
              >
                {section.title}
              </h2>
              {section.body.map((para, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal mt-2 first:mt-0"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
