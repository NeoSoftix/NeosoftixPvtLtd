import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NeoSoftix — Ideas to Impact",
    template: "%s",
  },
  description:
    "NeoSoftix is a digital growth agency delivering custom web development, mobile apps, digital marketing, software engineering, and AWS cloud solutions for global brands.",
  keywords: [
    "NeoSoftix",
    "web development company",
    "mobile app development",
    "digital marketing agency",
    "software development",
    "AWS cloud solutions",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "NeoSoftix",
    title: "NeoSoftix — Ideas to Impact",
    description:
      "All-in-one digital growth platform to create, manage, and publish content across multiple channels.",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoSoftix — Ideas to Impact",
    description:
      "All-in-one digital growth platform to create, manage, and publish content across multiple channels.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        {children}
      </body>
    </html>
  );
}
