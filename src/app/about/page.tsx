import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import AboutStory from "@/components/AboutStory";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export const metadata: Metadata = createMetadata({
  title: "About NeoSoftix | Our Story, Team & Mission",
  description:
    "Meet NeoSoftix: engineers, designers and growth strategists building scalable software, websites and mobile apps for businesses around the world.",
  path: "/about",
  ogTitle: "Architecting Digital Products & Scalable Solutions",
  ogLabel: "About Us",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050b16]">
      <PageHero
        badge="ABOUT NEOSOFTIX"
        title="Architecting the Future of Digital Products & Scalable Solutions"
        highlightWords={["Digital", "Products", "Scalable", "Solutions"]}
        description="We are a team of visionary engineers, digital strategists, and UI/UX designers crafting enterprise-grade software, high-conversion mobile apps, and growth ecosystems."
        primaryCta={{ label: "Start Your Project", href: "/contact" }}
        secondaryCta={{ label: "Our Mission & Story ↓", href: "#mission" }}
        stats={[
          { value: "150+", label: "Projects Delivered" },
          { value: "99%", label: "Client Satisfaction" },
          { value: "50+", label: "Global Brands" },
        ]}
      />
      <AboutStory />
      <Faq />
      <Contact />
    </main>
  );
}
