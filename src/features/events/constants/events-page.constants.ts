import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const EVENTS_HERO = {
  badgeText: "Events",
  description:
    "From global summits to exclusive experiences, connect with the minds shaping the future of AI infrastructure",
  primaryCta: "Join Discord Community",
  primaryCtaRoute: EXTERNAL_LINKS.discord,
  primaryCtaTarget: "_blank",
  image: "/images/neevcloud.png",
  trustBadges: [
    "Work that matters",
    "Team events",
    "Fast-moving culture",
    "Technical workshops",
    "Community meetups",
  ],
} as const;

export const EVENTS_FOOTER = {
  title: "Let's Meet Where the Future Is Being Built",
  description:
    "Join NeevCloud at upcoming events and discover how AI-native infrastructure is redefining what teams can build and scale.",
  primaryCta: "Join Discord Community",
  primaryCtaRoute: EXTERNAL_LINKS.discord,
  primaryCtaTarget: "_blank",
} as const;
