import type {
  FooterBranding,
  FooterLinkGroup,
  FooterSocialLink,
} from "./footer-types";

export const FOOTER_BRANDING: FooterBranding = {
  logo: "/icons/logo-white-with-name.svg",
  taglineLine1: "The AI SuperCloud",
  taglineLine2: "To Build and Scale Fearlessly",
  certificationImage: "/icons/iso.svg",
};

export const FOOTER_SOCIAL_LINKS: readonly FooterSocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/neevcloud/",
    icon: "/icons/facebook.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/neevcloud.in/",
    icon: "/icons/instagram.svg",
  },
  {
    label: "Twitter",
    href: "https://x.com/neevcloud_IN/",
    icon: "/icons/twitter.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@neevsupercloud/",
    icon: "/icons/youtube.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/neevcloud/",
    icon: "/icons/linkedin.svg",
  },
];

export const FOOTER_LINK_GROUPS: readonly FooterLinkGroup[] = [
  {
    title: "AI SuperCloud",
    links: [
      { label: "Visit the Platform", href: "/visit-platform" },
      { label: "Why AI SuperCloud?", href: "/why-ai-supercloud" },
      { label: "NeevCloud Arena", href: "/neevcloud-arena" },
      { label: "Trust Center", href: "/trust-center" },
    ],
  },
  {
    title: "Inference Hub",
    links: [
      { label: "Serverless Inference", href: "/serverless-inference" },
      { label: "Model Playground", href: "/model-playground" },
      { label: "Model APIs", href: "/model-api" },
      { label: "Model Catalog", href: "/model-catalog" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "CPU Instance", href: "/cpu-cluster" },
      { label: "GPU Instance", href: "/gpu-cluster" },
      { label: "Managed Kubernetes", href: "/managed-kubernetes" },
      { label: "High-Performance NVMe", href: "/nvme" },
      { label: "Object Storage", href: "/object-storage" },
      { label: "Serverless APIs", href: "/serverless-apis" },
      { label: "Model Playground", href: "/model-playground" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { label: "GPU Pricing", href: "/gpu-pricing" },
      { label: "CPU Pricing", href: "/cpu-pricing" },
      { label: "Inference Pricing", href: "/ai-inference" },
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
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Life at NeevCloud", href: "/life-at-neevcloud" },
      { label: "Event", href: "/events" },
      { label: "Contact Us", href: "/contact-neevcloud#contact-form" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms-condition" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "CERT-in Guidelines", href: "/cert-guidelines" },
      { label: "Acceptable User Policy", href: "/acceptable-user-policy" },
      { label: "Service Level Agreement", href: "/service-level-agreement" },
      { label: "Billing Guidelines", href: "/billing-guidelines" },
    ],
  },
];
