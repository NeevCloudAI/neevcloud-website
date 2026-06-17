import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type {
  DevelopersChangelogCardItem,
  DevelopersCommunityCardItem,
} from "../types/community-section.types";

export const DEVELOPERS_COMMUNITY_SECTION = {
  title: "Join Thousands of Developers Building on NeevCloud",
} as const;

export const DEVELOPERS_COMMUNITY_CARDS: readonly DevelopersCommunityCardItem[] =
  [
    {
      id: "discord",
      iconSrc: "/icons/discord-outline.svg",
      iconAlt: "Discord",
      title: "Discord",
      description:
        "Real-time help, model discussions, deployment tips, and direct access to the NeevCloud engineering team.",
      ctaLabel: "Join Discord",
      ctaHref: EXTERNAL_LINKS.discord,
      ctaTarget: "_blank",
    },
    {
      id: "github",
      iconSrc: "/icons/github-outline.svg",
      iconAlt: "GitHub",
      title: "GitHub",
      description:
        "Open-source examples, SDK source code, Terraform provider, and contribution guides.",
      ctaLabel: "View GitHub",
      ctaHref: EXTERNAL_LINKS.github,
      ctaTarget: "_blank",
    },
  ] as const;

export const DEVELOPERS_CHANGELOG_CARD: DevelopersChangelogCardItem = {
  label: "STAY UPDATED",
  description:
    "SDK updates, new models, API improvements, all documented in the changelog.",
  ctaLabel: "View Full Changelog",
  ctaHref: EXTERNAL_LINKS.agenticStudioOverview,
  ctaTarget: "_blank",
};
