export const FOOTER_2026 = {
  ctaHeading: "Start Building on NeevCloud Today",
  ctaSubtext:
    "Join thousands of innovators using NeevCloud to train, deploy, and scale AI without barriers.",
  ctaLabel: "Get Started",
  ctaHref: "#",
} as const;

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

// TODO: point hrefs at real routes (gpu-pricing, ai-inference, careers, …).
const link = (label: string): { label: string; href: string } => ({
  label,
  href: "#",
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
      "Inference Pricing",
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
];
