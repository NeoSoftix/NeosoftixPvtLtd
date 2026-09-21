import Header from "@/components/Header";
import ServicesHero from "@/components/ServicesHero";
import Services from "@/components/Services";
import OurProcess from "@/components/OurProcess";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services — NeoSoftix | Digital & Mobile Engineering",
  description:
    "Explore NeoSoftix services: Web Development, Mobile App Development, Digital Marketing, Software Engineering, and AWS Cloud Solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050b16]">
      <Header />
      <ServicesHero />
      <Services />
      <OurProcess />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
