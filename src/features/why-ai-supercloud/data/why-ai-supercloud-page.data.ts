import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const WHY_AI_SUPERCLOUD_HERO = {
  badgeText: "Why AI SuperCloud",
  description:
    "Traditional cloud was built for general computing, and later adapted for AI. AI Supercloud is purpose-built for machine learning from the ground up.",
  primaryCta: "Access Console",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Documentation",
  secondaryCtaRoute: EXTERNAL_LINKS.gpuAiServiceOverview,
  secondaryCtaTarget: "_blank",
  trustBadges: [
    "Data residency in India",
    "DPDP Act compliant",
    "SOC 2 Type II",
    "Data never used for training",
    "99.9% uptime SLA",
  ],
  image: "/images/webp/ai-supercloud.webp",
} as const;

export const WHY_AI_SUPERCLOUD_FOOTER = {
  title: "Build on infrastructure made for AI",
  description:
    "Purpose-built AI Supercloud with instant GPU access, transparent pricing, and sovereign infrastructure within India.",
  primaryCta: "Access Console",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Documentation",
  secondaryCtaRoute: EXTERNAL_LINKS.gpuAiServiceOverview,
  secondaryCtaTarget: "_blank",
} as const;
