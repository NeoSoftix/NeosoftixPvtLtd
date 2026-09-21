import Header from "@/components/Header";
import WorkHero from "@/components/WorkHero";
import WorkGrid from "@/components/WorkGrid";
import WorkCTA from "@/components/WorkCTA";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Work — NeoSoftix | Featured Projects & Portfolio",
  description:
    "Explore our portfolio of web engineering platforms, mobile apps, restaurant management solutions, and digital growth case studies.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#050b16]">
      <Header />
      <WorkHero />
      <WorkGrid />
      <WorkCTA />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
