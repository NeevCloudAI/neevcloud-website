import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const CPU_PRICING_HERO = {
  badgeText: "CPU Pricing",
  description:
    "GPUs train models. But data pipelines, API servers, databases, and orchestration run on CPUs. NeevCloud provides the general-purpose compute your AI stack actually needs to function.",
  primaryCta: "Deploy Instance",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Configurations",
  secondaryCtaRoute: "/cpu-pricing#cpu-ai-section",
  trustBadges: [
    "Deploy in 60 seconds",
    "Pay per hour",
    "Scale instantly",
    "Linux & Windows",
  ],
} as const;

export const CPU_PRICING_FOOTER = {
  title: "Deploy GPU First Instance Today",
  description:
    "Flexible CPU compute for data preprocessing, APIs, databases, and orchestration. Deploy in 60 seconds with transparent per-hour pricing.",
  primaryCta: "Deploy Instance",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Configurations",
  secondaryCtaRoute: "/cpu-pricing#cpu-ai-section",
} as const;
