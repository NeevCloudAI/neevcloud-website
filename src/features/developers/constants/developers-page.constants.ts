import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const DEVELOPERS_HERO = {
  badgeText: "Built for builders",
  description:
    "OpenAI-compatible APIs, Python and Node SDKs, CLI, Terraform support, and developer-first documentation built for real-world use. From zero to first inference call in under 5 minutes.",
  primaryCta: "Deploy Your Agent Stack",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "Talk to an Engineer",
  secondaryCtaRoute: "/contact-neevcloud",
  image: "/images/webp/model-api.webp",
  trustBadges: [
    "OpenAI-compatible",
    "Python & Node SDKs",
    "Terraform provider",
    "CLI tool",
    "Complete docs",
  ],
} as const;

export const DEVELOPERS_FOOTER = {
  title: "Start Building on NeevCloud Today",
  description:
    "Create an account, generate your API key, and make your first request in under 5 minutes. Free tier includes 2,00,000 tokens per day.",
  primaryCta: "Access Console",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "Read Documentation",
  secondaryCtaRoute: EXTERNAL_LINKS.tutorials,
  secondaryCtaTarget: "_blank",
} as const;
