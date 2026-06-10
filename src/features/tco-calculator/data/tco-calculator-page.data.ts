import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const TCO_CALCULATOR_HERO = {
  badgeText: "TCO Calculator",
  description:
    "Compare your current infrastructure spend against NeevCloud in under two minutes-with full line-item transparency.",
  primaryCta: "Open TCO Calculator",
  primaryCtaRoute: "/tco-calculator#tco-calculator-tool",
  secondaryCta: "Talk to Sales",
  secondaryCtaRoute: "/contact-neevcloud",
  trustBadges: [
    "No signup required",
    "Provider comparison",
    "Full transparency",
    "Exportable results",
    "Real pricing data",
  ],
} as const;

export const TCO_CALCULATOR_FOOTER = {
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
