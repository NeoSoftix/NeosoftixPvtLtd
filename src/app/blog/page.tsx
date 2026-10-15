import type { Metadata } from "next";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";
import Contact from "@/components/Contact";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog — NeoSoftix | Web, SEO, Apps & Cloud Insights",
  description:
    "Practical guides and insights on web development, local SEO, mobile apps, AWS cloud and digital marketing from the NeoSoftix team.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050b16]">
      <BlogHero postCount={blogPosts.length} />
      <BlogGrid />
      <Contact />
    </main>
  );
}
