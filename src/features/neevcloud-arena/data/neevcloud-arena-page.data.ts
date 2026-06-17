import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const NEEVCLOUD_ARENA_HERO = {
  badgeText: "NeevCloud Arena",
  description:
    "NeevCloud ARENA lets you test models, run workloads, and validate performance on production infrastructure, before making decisions.",
  primaryCta: "Try ARENA",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "Book a Session",
  secondaryCtaRoute: "/contact-neevcloud",
  trustBadges: [
    "Try in Minutes",
    "Real Infrastructure",
    "SOC 2 Type II",
    "Zero Setup",
    "99.9% uptime SLA",
  ],
  image: "/images/webp/model-api.webp",
} as const;

export const NEEVCLOUD_ARENA_FOOTER = {
  title: "Start Building on NeevCloud",
  description:
    "Deploy general-purpose, compute-optimized, or memory-optimized instances in minutes. Co-located with GPU clusters for zero egress charges.",
  primaryCta: "Access Console",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "Read Documentation",
  secondaryCtaRoute: EXTERNAL_LINKS.gpuAiServiceOverview,
  secondaryCtaTarget: "_blank",
} as const;
