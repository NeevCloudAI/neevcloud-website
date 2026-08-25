import { EXTERNAL_LINKS } from "../constants/external-links.constants";

export const FOOTER = {
  ctaHeading: "Start Building on NeevCloud Today",
  ctaSubtext:
    "Join thousands of innovators using NeevCloud to train, deploy, and scale AI without barriers.",
  ctaLabel: "Get Started",
  ctaHref: EXTERNAL_LINKS.aiSupercloudConsole,
  copyright: "© 2026, NeevAI SuperCloud Pvt. Ltd.",
  ctaTarget: "_blank",
  legal: [
    { label: "Terms of Usage", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "AUP", href: "/acceptable-user-policy" },
    { label: "SLA", href: "/service-level-agreement" },
    { label: "CERT-in Guidelines", href: "/cert-guidelines" },
    { label: "Billing Guidelines", href: "/billing-guidelines" },
  ],
} as const;

export type FooterColumn = {
  title: string;
  links: { label: string; href: string; target?: "_blank" }[];
};

// Mirrors the header's NAV_ITEMS 1:1 (src/shared/components/header/index.tsx)
// so the two menus never drift apart. Add/rename a link there first, then
// mirror it here.
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "AI SuperCloud",
    links: [
      { label: "Visit the Platform", href: "/visit-platform" },
      { label: "Why AI SuperCloud", href: "/why-ai-supercloud" },
      { label: "NeevCloud Arena", href: "/neevcloud-arena" },
      { label: "Trust Center", href: "/trust-center" },
    ],
  },
  {
    title: "Inference Hub",
    links: [
      { label: "Serverless Inference", href: "/serverless-inference" },
      { label: "Dedicated Inferencing", href: "/dedicated-inferencing" },
      { label: "Model Playground", href: "/model-playground" },
      { label: "Model Catalog", href: "/model-catalog" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "GPU AI Service", href: "/gpu-ai-service" },
      { label: "AI Supercluster", href: "/ai-superclusters" },
      { label: "CPU Instance", href: "/cpu-cluster" },
      { label: "Managed Kubernetes", href: "/managed-kubernetes" },
      { label: "High-Performance NVMe", href: "/nvme" },
      { label: "Object Storage", href: "/object-storage" },
      { label: "AI Templates", href: "/ai-templates" },
      { label: "VM Service", href: "/vm-service" },
      { label: "Agentic Studio", href: "/agentic-studio" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Public Sector", href: "/public-sector" },
      { label: "BFSI", href: "/bfsi" },
      { label: "Media & VFX", href: "/media-vfx" },
      { label: "Healthcare", href: "/healthcare" },
      { label: "Defence", href: "/defence" },
      { label: "LLM Fine-Tuning", href: "/llm-training" },
      { label: "Generative AI", href: "/generative-ai" },
      { label: "Agentic Workflows", href: "/agentic-workflow" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { label: "GPU Compute", href: "/gpu-pricing" },
      { label: "CPU Compute", href: "/cpu-pricing" },
      // { label: "AI Inference", href: "/ai-inference" },
      { label: "TCO Calculator", href: "/tco-calculator" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Developers Hub", href: "/developers" },
      { label: "Model APIs", href: "/model-api" },
      { label: "Agentic Workflows", href: "/agentic-workflow" },
      {
        label: "Request Feature",
        href: EXTERNAL_LINKS.requestFeature,
        target: "_blank",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Leadership", href: "/leadership" },
      { label: "Career", href: "/careers" },
      { label: "Life at NeevCloud", href: "/life-at-neevcloud" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Events", href: "/events" },
      { label: "Blogs", href: EXTERNAL_LINKS.blogs },
      { label: "Contact Us", href: "/contact-neevcloud" },
    ],
  },
];
