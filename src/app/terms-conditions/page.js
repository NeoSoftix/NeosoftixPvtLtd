import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import Footer from "@/components/Footer";
import { termsConditionsSections } from "@/data/termsConditionsData";

export const metadata = {
  title: "Terms & Conditions — NeoSoftix",
  description:
    "Read the NeoSoftix Terms & Conditions governing the use of our website and services.",
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <PageHero
        compact
        badge="TERMS & CONDITIONS"
        title="Terms of Using Our Website"
        description="Please read these terms carefully before using the NeoSoftix website or engaging with our services."
      />
      <LegalContent lastUpdated="January 1, 2026" sections={termsConditionsSections} />
      <Footer />
    </main>
  );
}
