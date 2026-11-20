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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "NeoSoftix",
      alternateName: [
        "NeoSoftix Pvt. Ltd.",
        "NeoSoftix",
        "NeoSoftix Web, App & Digital Marketing Agency",
      ],
      description:
        "Web development, mobile app development, custom software, AWS cloud solutions, and digital marketing agency.",
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "NeoSoftix",
      alternateName: [
        "NeoSoftix Pvt. Ltd.",
        "NeoSoftix Web, App & Digital Marketing Agency",
      ],
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/logo.png`,
      description:
        "NeoSoftix delivers web development, mobile app development, custom software development, AWS cloud services, and performance digital marketing for global businesses.",
      email: "info@neosoftix.com",
      telephone: "+918557062045",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A-817, 8th Floor, Bestech Business Tower",
        addressLocality: "Mohali",
        addressRegion: "Punjab",
        postalCode: "160062",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "30.675832",
        longitude: "76.740277",
      },
      hasMap:
        "https://maps.google.com/?q=A-817,+8th+Floor,+Bestech+Business+Tower,+Mohali,+160062",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+918557062045",
          email: "info@neosoftix.com",
          contactType: "customer service",
          availableLanguage: ["English"],
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "Country",
          name: "Germany",
        },
        {
          "@type": "Place",
          name: "Europe",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital & Software Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Software Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AWS Cloud Solutions",
            },
          },
        ],
      },
      sameAs: [
        "https://www.facebook.com/neosoftix/",
        "https://www.instagram.com/neo_softix/",
        "https://www.linkedin.com/company/neosoftix/",
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050b16]" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
