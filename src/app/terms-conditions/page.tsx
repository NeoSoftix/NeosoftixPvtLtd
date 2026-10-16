import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { termsConditionsSections } from "@/data/termsConditionsData";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions | NeoSoftix",
  description:
    "Read the NeoSoftix Terms & Conditions that govern the use of our website and the web, app, software and marketing services we provide.",
  path: "/terms-conditions",
  ogLabel: "Legal",
});

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero
        compact
        badge="TERMS & CONDITIONS"
        title="Terms of Using Our Website"
        description="Please read these terms carefully before using the NeoSoftix website or engaging with our services."
      />
      <LegalContent lastUpdated="January 1, 2026" sections={termsConditionsSections} />
    </main>
  );
}
