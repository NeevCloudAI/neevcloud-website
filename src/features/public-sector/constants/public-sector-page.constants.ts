import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const PUBLIC_SECTOR_HERO = {
  badgeText: "AI Infrastructure for Public Sector",
  description:
    "Public sector AI initiatives require infrastructure that respects data sovereignty, meets compliance standards, and supports strategic autonomy. NeevCloud provides Indian-built infrastructure designed for government and public sector requirements.",
  primaryCta: "Discuss Requirements",
  primaryCtaRoute: "/contact-neevcloud#contact-form",
  secondaryCta: "View Complaince",
  secondaryCtaRoute: "/privacy-policy",
  image: "/images/webp/public-sector.webp",
  trustBadges: [
    "India-based infrastructure",
    "Data sovereignty controls",
    "Government compliance ready",
    "Strategic independence",
  ],
} as const;

export const PUBLIC_SECTOR_FOOTER = {
  title: "Ready to Run Your First Inference?",
  description:
    "Infrastructure requirements for government initiatives. Indigenous infrastructure, data sovereignty, and compliance-ready for public sector deployment.",
  primaryCta: "Talk to Sales",
  primaryCtaRoute: "/contact-neevcloud#contact-form",
  secondaryCta: "Read the Docs",
  secondaryCtaRoute: EXTERNAL_LINKS.inferenceDocs,
  secondaryCtaTarget: "_blank",
} as const;
