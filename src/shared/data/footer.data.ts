export const FOOTER = {
  ctaHeading: "Start Building on NeevCloud Today",
  ctaSubtext:
    "Join thousands of innovators using NeevCloud to train, deploy, and scale AI without barriers.",
  ctaLabel: "Get Started",
  ctaHref: "/contact-neevcloud",
  copyright: "© 2026, NeevAI SuperCloud Pvt. Ltd.",
  legal: [
    { label: "Terms of Usage", href: "/terms-condition" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "AUP", href: "/acceptable-user-policy" },
    { label: "SLA", href: "/service-level-agreement" },
  ],
} as const;

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

const ROUTE_MAP: Record<string, string> = {
  "GPU AI Service": "/gpu-cluster",
  "AI Inference": "/ai-inference",
  "CPU Compute": "/cpu-cluster",
  Storage: "/object-storage",
  "Public Sector & National AI": "/public-sector",
  "GPU Pricing": "/gpu-pricing",
  "CPU Compute Pricing": "/cpu-pricing",
  "Cost Efficiency Explained": "/tco-calculator",
  "API Reference": "/developers",
  "Status Page": "/trust-center",
  Blogs: "/newsroom",
  "Events & Webinar": "/events",
  "About NeevCloud": "/about-us",
  "Press & Media": "/newsroom",
  Careers: "/careers",
  "Vision & Mission": "/about-us",
  "Why NeevCloud": "/why-ai-supercloud",
  Leadership: "/leadership",
  "Contact Us": "/contact-neevcloud",
  "Terms & Conditions": "/terms-condition",
  "Privacy Policy": "/privacy-policy",
  "CERT-in Guidelines": "/cert-guidelines",
  "Acceptable User Policy": "/acceptable-user-policy",
  "Service Level Agreement": "/service-level-agreement",
  "Billing Guidelines": "/billing-guidelines",
};

const link = (label: string): { label: string; href: string } => ({
  label,
  href: ROUTE_MAP[label] ?? "#",
});

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Products",
    links: ["GPU AI Service", "AI Inference", "CPU Compute", "Storage"].map(
      link,
    ),
  },
  {
    title: "Solutions",
    links: [
      "Research & Academia",
      "Enterprises",
      "Startups & Builders",
      "AI Labs & Model Builders",
      "Public Sector & National AI",
    ].map(link),
  },
  {
    title: "Pricing",
    links: [
      "GPU Pricing",
      "Inference Pricing",
      "CPU Compute Pricing",
      "Cost Efficiency Explained",
    ].map(link),
  },
  {
    title: "Developers",
    links: [
      "API Reference",
      "Documentation",
      "Status Page",
      "Examples & Templates",
      "Quick Start Guides",
    ].map(link),
  },
  {
    title: "Resources",
    links: [
      "Blogs",
      "Case Studies",
      "Architecture",
      "Benchmarks",
      "Whitepapers",
      "Events & Webinar",
    ].map(link),
  },
  {
    title: "Company",
    links: [
      "About NeevCloud",
      "Press & Media",
      "Careers",
      "Vision & Mission",
      "Why NeevCloud",
      "Leadership",
      "Contact Us",
    ].map(link),
  },
  {
    title: "Legal",
    links: [
      "Terms & Conditions",
      "Privacy Policy",
      "CERT-in Guidelines",
      "Acceptable User Policy",
      "Service Level Agreement",
      "Billing Guidelines",
    ].map(link),
  },
];
