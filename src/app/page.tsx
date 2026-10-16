import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export const metadata: Metadata = createMetadata({
  title: "NeoSoftix | Web, App & Digital Marketing Agency",
  description:
    "NeoSoftix builds fast websites, mobile apps, custom software and AWS cloud solutions, plus digital marketing that turns visitors into paying customers.",
  path: "/",
  ogTitle: "Ideas to Impact: Websites, Apps & Growth Marketing",
  ogLabel: "Digital Growth Agency",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Portfolio />
      <OurProcess />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
