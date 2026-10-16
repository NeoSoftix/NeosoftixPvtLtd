import type { Metadata } from "next";
import { siteName, siteUrl } from "@/lib/site";

type PageSeo = {
  /** Full <title> text, used as-is (not run through the layout template). */
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/about". Used for canonical and og:url. */
  path: string;
  /** Short label shown above the headline on the generated OG image. */
  ogLabel?: string;
  /** Headline on the generated OG image. Defaults to `title` without the brand suffix. */
  ogTitle?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

export function ogImageUrl(title: string, label?: string) {
  const params = new URLSearchParams({ title });
  if (label) params.set("label", label);
  return `/og?${params.toString()}`;
}

export function absoluteUrl(path: string) {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

export function createMetadata({
  title,
  description,
  path,
  ogLabel,
  ogTitle,
  keywords,
  type = "website",
  publishedTime,
  noIndex,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const headline = ogTitle ?? title.replace(/\s*\|\s*NeoSoftix$/, "");
  const image = {
    url: ogImageUrl(headline, ogLabel),
    width: 1200,
    height: 630,
    alt: headline,
    type: "image/png",
  };

  return {
    title: { absolute: title },
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName,
      locale: "en_US",
      title,
      description,
      images: [image],
      ...(type === "article" && publishedTime && { publishedTime, authors: [`${siteName} Team`] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}
