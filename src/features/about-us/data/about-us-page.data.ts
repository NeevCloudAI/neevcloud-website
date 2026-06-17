import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const ABOUT_US_HERO = {
  badgeText: "About Us",
  description:
    "NeevCloud is india's first AI SuperCloud, infrastructure designed from the ground up to make advanced AI computing accessible to anyone with the ambition to build.",
  primaryCta: "Get started",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Infrastructure",
  secondaryCtaRoute: "",
  secondaryCtaTarget: "",
  trustBadges: [
    "Indian-owned",
    "Full-stack control",
    "Transparent pricing",
    "No vendor lock-in",
    "Data sovereignty",
  ],
} as const;

export const ABOUT_US_FOOTER = {
  title: "Start Building with Model APIs Today",
  description:
    "Create an account and receive 10,000 free API requests. No credit card required.",
  primaryCta: "Request API Access",
  primaryCtaRoute: EXTERNAL_LINKS.apiKeys,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Documentation",
  secondaryCtaRoute: EXTERNAL_LINKS.firstInferenceCall,
  secondaryCtaTarget: "_blank",
} as const;
