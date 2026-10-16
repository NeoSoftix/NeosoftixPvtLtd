import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import NewContactDesign from "@/components/NewContactDesign";
import Faq from "@/components/Faq";

export const metadata: Metadata = createMetadata({
  title: "Contact NeoSoftix | Start Your Project Today",
  description:
    "Tell NeoSoftix about your website, mobile app, software or marketing project. Share your goals and our team will get back to you within one business day.",
  path: "/contact",
  ogTitle: "Let's Build Something Great Together",
  ogLabel: "Contact Us",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030914]">
      <NewContactDesign />
      <Faq />
    </main>
  );
}
