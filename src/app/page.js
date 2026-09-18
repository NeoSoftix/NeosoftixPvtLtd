import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Portfolio />
      <OurProcess />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
