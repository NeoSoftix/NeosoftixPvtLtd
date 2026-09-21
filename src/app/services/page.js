import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import OurProcess from "@/components/OurProcess";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services — NeoSoftix | Digital & Mobile Engineering",
  description:
    "Explore NeoSoftix services: Web Development, Mobile App Development, Digital Marketing, Software Engineering, and AWS Cloud Solutions.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050b16]">
      <Header />
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
      <Footer />
    </main>
  );
}
