import type {
  FooterBranding,
  FooterCtaContent,
  FooterLinkGroup,
  FooterSocialLink,
} from "./footer-types";

export const FOOTER_BRANDING: FooterBranding = {
  logo: "/icons/logo-white.svg",
  taglineLine1: "The AI SuperCloud",
  taglineLine2: "To Build and Scale Fearlessly",
  certificationImage: "/icons/iso.svg",
};

export const FOOTER_CTA: FooterCtaContent = {
  title1: "Start Building on",
  title2: "NeevCloud Today",
  description1:
    "Sign up in 60 seconds. $200 in compute credits, no commitment. Your first",
  description2: "B200 is already warming up.",
  button1Text: "Get Started Free",
  button2Text: "Talk to Our Team",
};

export const FOOTER_SOCIAL_LINKS: readonly FooterSocialLink[] = [
  { label: "Facebook", href: "#", icon: "/icons/facebook.svg" },
  { label: "Instagram", href: "#", icon: "/icons/instagram.svg" },
  { label: "Twitter", href: "#", icon: "/icons/twitter.svg" },
  { label: "WhatsApp", href: "#", icon: "/icons/whatsapp.svg" },
  { label: "YouTube", href: "#", icon: "/icons/youtube.svg" },
  { label: "LinkedIn", href: "#", icon: "/icons/linkedin.svg" },
];

export const FOOTER_LINK_GROUPS: readonly FooterLinkGroup[] = [
  {
    title: "Products",
    links: [
      { label: "GPU AI Service", href: "#" },
      { label: "AI Inference", href: "#" },
      { label: "GPU Compute", href: "#" },
      { label: "Storage", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Research & Academia", href: "#" },
      { label: "Enterprises", href: "#" },
      { label: "Startups & Builders", href: "#" },
      { label: "AI Labs & Model Builders", href: "#" },
      { label: "Public Sector & National AI", href: "#" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { label: "GPU Pricing", href: "#" },
      { label: "Inference Pricing", href: "#" },
      { label: "CPU Compute Pricing", href: "#" },
      { label: "Storage Pricing", href: "#" },
      { label: "Cost Efficiency Explained", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Reference", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Status Page", href: "#" },
      { label: "Examples & Tutorials", href: "#" },
      { label: "Quick Start Guides", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Architecture", href: "#" },
      { label: "Benchmarks", href: "#" },
      { label: "Whitepapers", href: "#" },
      { label: "Events & Webinars", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About NeevCloud", href: "#" },
      { label: "Press & Media", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Vision & Mission", href: "#" },
      { label: "Why NeevCloud", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Usage", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "AUP", href: "#" },
      { label: "SLA", href: "#" },
      { label: "MSA", href: "#" },
    ],
  },
];
