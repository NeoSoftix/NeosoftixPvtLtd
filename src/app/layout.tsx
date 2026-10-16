import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/site";
import { ogImageUrl } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "NeoSoftix | Web, App & Digital Marketing Agency",
    template: "%s | NeoSoftix",
  },
  description:
    "NeoSoftix builds fast websites, mobile apps, custom software and AWS cloud solutions, plus digital marketing that turns visitors into paying customers.",
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "NeoSoftix",
    "web development company",
    "mobile app development",
    "digital marketing agency",
    "software development",
    "AWS cloud solutions",
  ],
  // Fallbacks only: every page sets its own canonical, Open Graph and Twitter
  // metadata through createMetadata() in src/lib/seo.ts.
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    locale: "en_US",
    title: "NeoSoftix | Web, App & Digital Marketing Agency",
    description:
      "NeoSoftix builds fast websites, mobile apps, custom software and AWS cloud solutions, plus digital marketing that turns visitors into paying customers.",
    images: [{ url: ogImageUrl("Ideas to Impact"), width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoSoftix | Web, App & Digital Marketing Agency",
    description:
      "NeoSoftix builds fast websites, mobile apps, custom software and AWS cloud solutions, plus digital marketing that turns visitors into paying customers.",
    images: [ogImageUrl("Ideas to Impact")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "0xn0iOKwgDYwGd6QUKk53PgAB4mjYRF2IbNqizSQFQw",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#050b16]" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
