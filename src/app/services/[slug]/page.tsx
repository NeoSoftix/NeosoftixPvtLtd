import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { subServicesData } from "@/data/subServicesData";
import { createMetadata } from "@/lib/seo";
import SubServiceTemplate from "@/components/SubServiceTemplate";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = subServicesData[slug];
  if (!service) {
    return { title: { absolute: "Service Not Found | NeoSoftix" }, robots: { index: false } };
  }
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
    ogTitle: `${service.title}: ${service.tagline}`,
    ogLabel: "NeoSoftix Services",
  });
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
