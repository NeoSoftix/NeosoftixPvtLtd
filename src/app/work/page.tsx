import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import WorkGrid from "@/components/WorkGrid";
import WorkCTA from "@/components/WorkCTA";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export const metadata: Metadata = createMetadata({
  title: "Our Work & Portfolio | NeoSoftix",
  description:
    "See the websites, mobile apps and digital platforms NeoSoftix has built for restaurants, startups and growing brands. Real projects, real results.",
  path: "/work",
  ogTitle: "Turning Ideas Into Real Solutions",
  ogLabel: "Portfolio",
});

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#050b16]">
      <PageHero
        badge="OUR WORK"
        title="Turning Ideas Into Real Solutions"
        highlightWords={["Real", "Solutions"]}
        description="We build digital experiences that help businesses grow, engage and succeed. Explore some of our recent projects and see how we bring ideas to life."
        stats={[
          { value: "12+", label: "Projects Delivered" },
          { value: "10+", label: "Happy Clients" },
          { value: "5+", label: "Years of Experience" },
        ]}
      />
      <WorkGrid />
      <WorkCTA />
      <Faq />
      <Contact />
    </main>
  );
}
