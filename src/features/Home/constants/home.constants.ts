import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const HOME_FOOTER = {
  title: "Start Building on NeevCloud Today",
  description:
    "Sign up in 60 seconds. $200 in compute credits, no commitment. Your first B200 is already warming up.",
  primaryCta: "Get Started Free",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "Talk to Our Team",
  secondaryCtaRoute: "/contact-neevcloud#contact-form",
} as const;
