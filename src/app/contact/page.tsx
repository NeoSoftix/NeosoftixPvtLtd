import type { Metadata } from "next";
import NewContactDesign from "@/components/NewContactDesign";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Contact Us — NeoSoftix",
  description: "Get in touch with the NeoSoftix team. Reach out to discuss your goals, review your setup, and turn your concepts into impactful digital products.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030914]">
      <NewContactDesign />
      <Faq />
    </main>
  );
}
