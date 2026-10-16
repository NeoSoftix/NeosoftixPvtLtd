import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";
import Contact from "@/components/Contact";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = createMetadata({
  title: "Blog | Web, SEO, App & Cloud Insights | NeoSoftix",
  description:
    "Practical guides on web development, local SEO, mobile apps, AWS cloud and digital marketing from the NeoSoftix team. Actionable tips for growing businesses.",
  path: "/blog",
  ogTitle: "Web, SEO, App & Cloud Insights",
  ogLabel: "NeoSoftix Blog",
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050b16]">
      <BlogHero postCount={blogPosts.length} />
      <BlogGrid />
      <Contact />
    </main>
  );
}
