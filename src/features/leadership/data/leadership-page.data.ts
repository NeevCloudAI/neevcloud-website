import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const LEADERSHIP_HERO = {
  badgeText: "Our Leadership",
  description:
    "We're building infrastructure that matters. Our leadership team brings experience from large-scale systems, AI development, and cloud operations, united by the mission to make AI computing accessible to everyone.",
  primaryCta: "Get started",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Infrastructure",
  secondaryCtaRoute: "",
  secondaryCtaTarget: "",
} as const;

export const LEADERSHIP_FOOTER = {
  title: "Ready to build together?",
  description:
    "Whether you're training models, deploying inference, or designing sovereign AI infrastructure — we'd like to hear what you're building.",
  primaryCta: "Get in touch",
  primaryCtaRoute: "/contact-neevcloud",
  secondaryCta: "Follow on Linkedin",
  secondaryCtaRoute: EXTERNAL_LINKS.neevcloudLinkedin,
  secondaryCtaTarget: "_blank",
} as const;
