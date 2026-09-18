import Header from "@/components/Header";
import NewContactDesign from "@/components/NewContactDesign";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us — NeoSoftix",
  description: "Get in touch with the NeoSoftix team. Reach out to discuss your goals, review your setup, and turn your concepts into impactful digital products.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030914]">
      <Header />
      <NewContactDesign />
      <Faq />
      <Footer />
    </main>
  );
}
