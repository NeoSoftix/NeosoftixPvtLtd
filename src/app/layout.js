import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://neosoftix.com";

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#050b16]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
