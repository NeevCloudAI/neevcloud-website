import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const OFFERS_HERO = {
  badgeText: "Independence Day Special",
  badgeColor: "saffron",
  // image: "/images/webp/independence-day.webp",
  description:
    "GPUs train models. But data pipelines, API servers, databases, and orchestration run on CPUs. NeevCloud provides the general-purpose compute your AI stack actually needs to function.",
  primaryCta: "Sign up today and get ₹15,000 free",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  primaryCtaTarget: "_blank",
  trustBadges: [],
} as const;

export const OFFERS_FOOTER = {
  title: "Deploy GPU First Instance Today",
  description:
    "Flexible CPU compute for data preprocessing, APIs, databases, and orchestration. Deploy in 60 seconds with transparent per-hour pricing.",
  primaryCta: "Deploy Instance - Get ₹15,000 Free",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  primaryCtaTarget: "_blank",
} as const;
