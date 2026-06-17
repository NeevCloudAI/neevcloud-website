import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const NEWSROOM_HERO = {
  badgeText: "Newsroom",
  description:
    "News, updates, and resources for media and press covering NeevCloud.",
  primaryCta: "Download Media Kit",
  primaryCtaRoute: "/files/neevcloud-media-kit.pdf",
  primaryCtaTarget: "_blank",
  image: "/images/webp/newsroom.webp",
  trustBadges: [] as const,
} as const;

export const NEWSROOM_FOOTER = {
  title: "Let’s Meet Where the Future Is Being Built",
  description:
    "Join NeevCloud at upcoming events and discover how AI-native infrastructure is redefining what teams can build and scale.",
  primaryCta: "Join Discord Community",
  primaryCtaRoute: EXTERNAL_LINKS.discord,
  primaryCtaTarget: "_blank",
} as const;
