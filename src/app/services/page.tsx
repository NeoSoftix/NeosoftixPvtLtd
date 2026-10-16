import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import OurProcess from "@/components/OurProcess";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export const metadata: Metadata = createMetadata({
  title: "Web, App, Marketing & Cloud Services | NeoSoftix",
  description:
    "Explore NeoSoftix services: web development, mobile app development, digital marketing, custom software and AWS cloud solutions built to grow your business.",
  path: "/services",
  ogTitle: "Web, Mobile, Marketing & Cloud Services",
  ogLabel: "Our Services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050b16]">
      <PageHero
        badge="OUR SERVICES"
        title="Engineering High-Performance Digital Products & Scalable Systems"
        highlightWords={["Digital", "Products", "Scalable", "Systems"]}
        description="Choose the services you need—from building high-converting web platforms and native mobile apps to scaling your business with cloud infrastructure."
      />
      <Services />
      <OurProcess />
      <Faq />
      <Contact />
    </main>
  );
}
