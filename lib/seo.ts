import { SITE_URL, BUSINESS_EMAIL, FAQ_DATA, SERVICES } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: "Synergy Projects",
    description:
      "Leading electrical contracting and turnkey project solutions company in Gurgaon and Vadodara, specializing in industrial, commercial, and hospitality electrical installations.",
    url: SITE_URL,
    telephone: "+91-90161-50931",
    email: BUSINESS_EMAIL,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Office No. 118, West Rajiv Nagar",
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        postalCode: "122001",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "C-504, Sundram Residency, Opp Royal Green, Vadsar",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390010",
        addressCountry: "IN",
      },
    ],
    founder: [
      { "@type": "Person", name: "Fenil Chokshi", jobTitle: "Co-Founder" },
      { "@type": "Person", name: "Yash Kumar", jobTitle: "Co-Founder" },
    ],
    areaServed: ["Gurgaon", "Haryana", "Vadodara", "Gujarat", "India"],
    serviceType: [
      "Electrical Contracting",
      "Turnkey Project Solutions",
      "Electrical Design and Drawing",
      "LT Panel Manufacturing",
      "After-Sales Electrical Maintenance",
    ],
    knowsAbout: [
      "Industrial Electrical Installation",
      "Commercial Construction",
      "Hospitality Electrical Solutions",
      "Warehouse Electrical Systems",
    ],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Synergy Projects",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-90161-50931",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [],
  };
}

export function getServiceSchemas() {
  return SERVICES.map((svc) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: svc.title,
    provider: { "@type": "Organization", name: "Synergy Projects" },
    areaServed: { "@type": "Country", name: "India" },
    description: svc.description,
  }));
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
