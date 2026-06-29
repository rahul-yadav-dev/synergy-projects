import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getServiceSchemas,
  getFAQSchema,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://synergyprojects.in"),
  title:
    "Synergy Projects | Electrical Contractor in Gurgaon & Vadodara | Turnkey Solutions",
  description:
    "Synergy Projects is a leading electrical contracting company in Gurgaon and Vadodara. We specialize in industrial, commercial, and hospitality electrical installations, turnkey project solutions, LT panel manufacturing, and maintenance services. Trusted by Saint Gobain, Eicher, and more.",
  keywords: [
    "electrical contractor Gurgaon",
    "electrical contractor Vadodara",
    "turnkey electrical solutions",
    "industrial electrical installation",
    "commercial electrical contractor India",
    "LT panel manufacturing",
    "electrical design and drawing",
    "electrical maintenance services",
  ],
  authors: [{ name: "Synergy Projects" }],
  openGraph: {
    title: "Synergy Projects | Smart Electricals, Stronger Infrastructure",
    description:
      "Leading electrical contracting and turnkey project solutions in Gurgaon and Vadodara. Trusted by top industrial and commercial clients across India.",
    url: "https://synergyprojects.in",
    siteName: "Synergy Projects",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Synergy Projects — Smart Electricals, Stronger Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synergy Projects | Electrical Contractor",
    description:
      "Smart Electricals, Stronger Infrastructure. Trusted by Saint Gobain, Eicher, LM Wind Power.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: { canonical: "https://synergyprojects.in" },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serviceSchemas = getServiceSchemas();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';document.documentElement.dataset.theme=t})()`,
          }}
        />
        <StructuredData data={getLocalBusinessSchema()} />
        <StructuredData data={getOrganizationSchema()} />
        {serviceSchemas.map((schema, i) => (
          <StructuredData key={i} data={schema} />
        ))}
        <StructuredData data={getFAQSchema()} />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary font-body">
        {children}
      </body>
    </html>
  );
}
