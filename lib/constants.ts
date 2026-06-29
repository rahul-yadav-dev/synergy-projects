export const SITE_URL = "https://synergyprojects.in";
export const BUSINESS_PHONE = "919016150931";
export const BUSINESS_PHONE_DISPLAY = "+91 90161 50931";
export const SECONDARY_PHONE = "919870304006";
export const SECONDARY_PHONE_DISPLAY = "+91 98703 04006";
export const BUSINESS_EMAIL = "synergyprojects2@gmail.com";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    id: "design",
    title: "Design & Drawing",
    description:
      "In-house facility for designing electrical layouts and equipment with precise drawings. We stay current with ISS, Electrical Rules, and Codes of Practice for all types of electrical installations.",
    icon: "Ruler" as const,
  },
  {
    id: "turnkey",
    title: "Turnkey Project Solutions",
    description:
      "End-to-end project delivery from design to commissioning. We plan, design, and oversee construction for commercial spaces, infrastructure, and industrial facilities across India.",
    icon: "Building2" as const,
  },
  {
    id: "manufacturing",
    title: "Manufacturing Facility",
    description:
      "Access to state-of-the-art facilities for manufacturing LT Panels, Bus Ducts, Control Panels, and AMF Panels for DG Sets — high-quality components for any electrical installation.",
    icon: "Factory" as const,
  },
  {
    id: "maintenance",
    title: "After-Sales Maintenance",
    description:
      "Routine checks and tests in compliance with State Statutory Authorities and Manufacturers, ensuring trouble-free operation of installed equipment across all installation types.",
    icon: "Wrench" as const,
  },
] as const;

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 7, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "", label: "Office Locations" },
] as const;

export const PROJECTS = [
  {
    name: "Hotel Pride Amber",
    category: "Hospitality",
    description: "Complete electrical installation for premium hotel property",
    image: "/images/projects/hotel-pride-amber.jpeg",
  },
  {
    name: "LM Wind Power Blades India",
    category: "Industrial",
    description: "Industrial electrical systems for wind energy manufacturing",
    image: "/images/projects/lm-wind-power.jpeg",
  },
  {
    name: "Eicher India Ltd.",
    category: "Industrial",
    description: "Electrical infrastructure for automotive manufacturing facility",
    image: "/images/projects/eicher-india.jpeg",
  },
  {
    name: "Saint Gobain",
    category: "Design & Build",
    description: "Civil and fit-out works with complete electrical solutions",
    image: "/images/projects/saint-gobain.jpeg",
  },
  {
    name: "Riata Life Sciences",
    category: "Commercial",
    description: "Electrical contracting for pharmaceutical facility",
    image: "/images/projects/riata-life-sciences.jpeg",
  },
  {
    name: "Motherson Sumi Systems",
    category: "Industrial",
    description: "Electrical systems for auto component manufacturing",
    image: "/images/projects/motherson-sumi.jpeg",
  },
  {
    name: "India Exposition Mart",
    category: "Commercial",
    description: "Large-scale electrical installation for exhibition center",
    image: "/images/projects/india-exposition-mart.jpeg",
  },
] as const;

export const CLIENTS = [
  "Saint Gobain",
  "LM Wind Power",
  "Eicher India",
  "India Exposition Mart",
  "Motherson Sumi Systems",
  "Hotel Pride Amber",
  "Riata Life Sciences",
] as const;

export const FAQ_DATA = [
  {
    question: "What services does Synergy Projects offer?",
    answer:
      "Synergy Projects offers electrical design and drawing, turnkey project solutions, LT panel and control panel manufacturing, construction and testing, and after-sales maintenance services for industrial, commercial, and hospitality projects across Gurgaon, Vadodara, and all of India.",
  },
  {
    question: "Where is Synergy Projects located?",
    answer:
      "Our head office is at Office No. 118, West Rajiv Nagar, Gurgaon, Haryana — 122001. Our branch office is at C-504, Sundram Residency, Opp Royal Green, Vadsar, Vadodara, Gujarat — 390010.",
  },
  {
    question: "What types of projects does Synergy Projects handle?",
    answer:
      "We handle industrial, office, warehouse, and commercial construction projects, as well as hospitality projects including hotels and restaurants. Our clients include Saint Gobain, Eicher India, LM Wind Power, and Motherson Sumi Systems.",
  },
  {
    question: "How can I contact Synergy Projects for a project enquiry?",
    answer:
      "You can fill out the enquiry form on our website to connect via WhatsApp, call us at +91 90161 50931 (Fenil Chokshi) or +91 98703 04006 (Yash Kumar), or email us at synergyprojects2@gmail.com.",
  },
  {
    question: "Does Synergy Projects provide after-sales maintenance?",
    answer:
      "Yes, we provide comprehensive after-sales maintenance services including routine checks and tests in accordance with State Statutory Authorities and Manufacturers' requirements, ensuring trouble-free and seamless operation of all installed electrical equipment.",
  },
] as const;

export const OFFICES = {
  head: {
    label: "Head Office",
    street: "Office No. 118, West Rajiv Nagar",
    city: "Gurgaon",
    state: "Haryana",
    zip: "122001",
    country: "India",
  },
  branch: {
    label: "Branch Office",
    street: "C-504, Sundram Residency, Opp Royal Green, Vadsar",
    city: "Vadodara",
    state: "Gujarat",
    zip: "390010",
    country: "India",
  },
} as const;

export const FOUNDERS = [
  { name: "Fenil Chokshi", role: "Co-Founder", phone: BUSINESS_PHONE_DISPLAY },
  { name: "Yash Kumar", role: "Co-Founder", phone: SECONDARY_PHONE_DISPLAY },
] as const;
