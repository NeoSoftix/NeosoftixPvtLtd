import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us — NeoSoftix | Innovative Digital Solutions",
  description:
    "Learn about NeoSoftix. We build scalable software, web engineering platforms, mobile apps, and digital growth strategies for global brands.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050b16]">
      <Header />
      <AboutHero />
      <AboutStory />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
