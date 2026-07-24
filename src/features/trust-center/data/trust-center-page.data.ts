import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const TRUST_CENTER_HERO = {
  badgeText: "Trust Center",
  description:
    "Enterprise-grade security, international compliance certifications, and transparent operations for teams building mission-critical AI systems.",
  // primaryCta: "View Certifications",
  secondaryCta: "Explore Security",
  secondaryCtaRoute: "/privacy-policy",
  trustBadges: [
    "Try in Minutes",
    "Real Infrastructure",
    "SOC 2 Type II",
    "Zero Setup",
    "99.9% uptime SLA",
  ],
  image: "/images/webp/visit-platform.webp",
} as const;

export const TRUST_CENTER_FOOTER = {
  title: "Start Building on NeevCloud",
  description:
    "Deploy general-purpose, compute-optimized, or memory-optimized instances in minutes. Co-located with GPU clusters for zero egress charges.",
  primaryCta: "Access Console",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "Read Documentation",
  secondaryCtaRoute: EXTERNAL_LINKS.documentation,
  secondaryCtaTarget: "_blank",
} as const;
