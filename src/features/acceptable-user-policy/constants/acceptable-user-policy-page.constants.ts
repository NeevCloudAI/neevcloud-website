import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const ACCEPTABLE_USER_POLICY_HERO = {
  badgeText: "Shared Standard",
  title: "Acceptable User Policy",
  description:
    "Our Acceptable Use Policy sets guidelines for the appropriate use of our services, ensuring a safe and respectful environment for all users.",
} as const;

export const ACCEPTABLE_USER_POLICY_FOOTER = {
  title: "Let's Meet Where the Future Is Being Built",
  description:
    "Join NeevCloud at upcoming events and discover how AI-native infrastructure is redefining what teams can build and scale.",
  primaryCta: "Join Discord Community",
  primaryCtaRoute: EXTERNAL_LINKS.discord,
  primaryCtaTarget: "_blank",
} as const;
