import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const BILLING_GUIDELINES_HERO = {
  badgeText: "Shared Standard",
  title: "Billing Guidelines",
  description:
    "We believe in providing clear and transparent billing practices to ensure a seamless and trustworthy experience for our valued customers.",
} as const;

export const BILLING_GUIDELINES_FOOTER = {
  title: "Let's Meet Where the Future Is Being Built",
  description:
    "Join NeevCloud at upcoming events and discover how AI-native infrastructure is redefining what teams can build and scale.",
  primaryCta: "Join Discord Community",
  primaryCtaRoute: EXTERNAL_LINKS.discord,
  primaryCtaTarget: "_blank",
} as const;
