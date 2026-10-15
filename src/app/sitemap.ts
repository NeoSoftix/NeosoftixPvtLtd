import type { MetadataRoute } from "next";
import { subServicesData } from "@/data/subServicesData";
import { blogPosts } from "@/data/blogPosts";
import { siteUrl } from "@/lib/site";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = (
    [
      { path: "", changeFrequency: "weekly", priority: 1 },
      { path: "/about", changeFrequency: "monthly", priority: 0.8 },
      { path: "/services", changeFrequency: "monthly", priority: 0.8 },
      { path: "/work", changeFrequency: "monthly", priority: 0.8 },
      { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
      { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
      { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
      { path: "/terms-conditions", changeFrequency: "yearly", priority: 0.3 },
    ] satisfies { path: string; changeFrequency: ChangeFrequency; priority: number }[]
  ).map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceRoutes = Object.keys(subServicesData).map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
