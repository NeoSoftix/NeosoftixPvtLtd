import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { subServicesData } from "@/data/subServicesData";
import SubServiceTemplate from "@/components/SubServiceTemplate";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = subServicesData[slug];
  if (!service) {
    return { title: "Service Not Found — NeoSoftix" };
  }
  return {
    title: `${service.title} — NeoSoftix`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(subServicesData).map((slug) => ({ slug }));
}

export default async function SubServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = subServicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030712]">
      <SubServiceTemplate data={service} />
      <Faq />
      <Contact />
    </main>
  );
}
