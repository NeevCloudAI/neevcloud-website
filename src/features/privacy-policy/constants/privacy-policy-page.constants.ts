import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const PRIVACY_POLICY_HERO = {
  badgeText: "Shared Standard",
  title: "Privacy Policy",
  description:
    "Our Privacy Policy outlines how we collect, use, and protect your personal information. We prioritize your privacy and data security.",
} as const;

export const PRIVACY_POLICY_FOOTER = {
  title: "Let's Meet Where the Future Is Being Built",
  description:
    "Join NeevCloud at upcoming events and discover how AI-native infrastructure is redefining what teams can build and scale.",
  primaryCta: "Join Discord Community",
  primaryCtaRoute: EXTERNAL_LINKS.discord,
  primaryCtaTarget: "_blank",
} as const;
