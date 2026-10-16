import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { privacyPolicySections } from "@/data/privacyPolicyData";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | NeoSoftix",
  description:
    "Read the NeoSoftix Privacy Policy to understand what personal information we collect, how we use and protect it, and the choices you have.",
  path: "/privacy-policy",
  ogLabel: "Legal",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero
        compact
        badge="PRIVACY POLICY"
        title="Your Privacy Matters to Us"
        description="Learn how NeoSoftix collects, uses, and protects your personal information when you interact with our website and services."
      />
      <LegalContent lastUpdated="January 1, 2026" sections={privacyPolicySections} />
    </main>
  );
}
