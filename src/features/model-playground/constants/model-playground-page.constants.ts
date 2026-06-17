import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const MODEL_PLAYGROUND_HERO = {
  description:
    "Test and explore production-ready AI models through an interactive interface. No code required, no setup needed, just instant access to see what's possible.",
  primaryCta: "Try in Playground",
  primaryCtaRoute: EXTERNAL_LINKS.aiInferencePlayground,
  primaryCtaTarget: "_blank",
  secondaryCta: "View ALL Models",
  secondaryCtaRoute: EXTERNAL_LINKS.aiInferenceDedicatedModel,
  secondaryCtaTarget: "_blank",
  badgeText: "Test AI Models Free",
  image: "/images/webp/model-playground.webp",
  trustBadges: [
    "Data residency in India",
    "DPDP Act compliant",
    "SOC 2 Type II",
    "Data never used for training",
    "99.9% uptime SLA",
  ],
} as const;

export const MODEL_PLAYGROUND_FOOTER = {
  title: "Launch Your First CPU Instance",
  description:
    "Deploy general-purpose, compute-optimized, or memory-optimized instances in minutes. Co-located with GPU clusters for zero egress charges.",
  primaryCta: "Configure Now",
  primaryCtaRoute: EXTERNAL_LINKS.aiInferenceOverview,
  primaryCtaTarget: "_blank",
  secondaryCta: "Talk to Our Team",
  secondaryCtaRoute: "/contact-neevcloud",
} as const;
