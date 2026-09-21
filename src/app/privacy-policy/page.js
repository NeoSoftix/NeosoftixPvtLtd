import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import Footer from "@/components/Footer";
import { privacyPolicySections } from "@/data/privacyPolicyData";

export const metadata = {
  title: "Privacy Policy — NeoSoftix",
  description:
    "Read the NeoSoftix Privacy Policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <PageHero
        compact
        badge="PRIVACY POLICY"
        title="Your Privacy Matters to Us"
        description="Learn how NeoSoftix collects, uses, and protects your personal information when you interact with our website and services."
      />
      <LegalContent lastUpdated="January 1, 2026" sections={privacyPolicySections} />
      <Footer />
    </main>
  );
}
