import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const SERVICE_LEVEL_AGREEMENT_HERO = {
  badgeText: "Shared Standard",
  title: "Service Level Agreement",
  description:
    "We are committed to delivering exceptional services to our valued customers. To ensure transparency, accountability, and a clear understanding of our service commitments, we have established a Service Level Agreement (SLA).",
} as const;

export const SERVICE_LEVEL_AGREEMENT_FOOTER = {
  title: "Let's Meet Where the Future Is Being Built",
  description:
    "Join NeevCloud at upcoming events and discover how AI-native infrastructure is redefining what teams can build and scale.",
  primaryCta: "Join Discord Community",
  primaryCtaRoute: EXTERNAL_LINKS.discord,
  primaryCtaTarget: "_blank",
} as const;
