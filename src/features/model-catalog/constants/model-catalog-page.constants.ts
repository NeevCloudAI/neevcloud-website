import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const MODEL_CATALOG_HERO = {
  badgeText: "Production AI Models",
  description:
    "Browse, filter, and test language, vision, and audio models. Every model is production-ready, OpenAI-compatible, and runs on infrastructure within India.",
  primaryCta: "Try Models Free",
  primaryCtaRoute: EXTERNAL_LINKS.templates,
  primaryCtaTarget: "_blank",
  secondaryCta: "Get API Access",
  secondaryCtaRoute: EXTERNAL_LINKS.apiKeys,
  secondaryCtaTarget: "_blank",
  image: "/images/webp/model-api.webp",
  trustBadges: [
    "Sub-100ms Latency",
    "RESTful APIs",
    "SOC 2 Type II",
    "Multi-Framework Support",
    "99.9% uptime SLA",
  ],
} as const;

export const MODEL_CATALOG_FOOTER = {
  title: "Start Building with Model APIs Today",
  description:
    "Create an account and receive 10,000 free API requests. No credit card required.",
  primaryCta: "Request API Access",
  primaryCtaRoute: EXTERNAL_LINKS.apiKeys,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Documentation",
  secondaryCtaRoute: EXTERNAL_LINKS.inferenceOverview,
  secondaryCtaTarget: "_blank",
} as const;
