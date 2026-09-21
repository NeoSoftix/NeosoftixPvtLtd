import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import WorkGrid from "@/components/WorkGrid";
import WorkCTA from "@/components/WorkCTA";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Work — NeoSoftix | Featured Projects & Portfolio",
  description:
    "Explore our portfolio of web engineering platforms, mobile apps, restaurant management solutions, and digital growth case studies.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#050b16]">
      <Header />
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
      <Footer />
    </main>
  );
}
