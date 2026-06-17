import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type { AnnouncementCardItem } from "../types/recent-announcements-section.types";

export const RECENT_ANNOUNCEMENTS_SECTION = {
  title: "Recent Announcements",
} as const;

export const RECENT_ANNOUNCEMENTS_ITEMS = [
  {
    id: "agnikul-ndtv",
    image: "/images/webp/agnikul.webp",
    imageAlt:
      "Agnikul and NeevCloud satellite hardware with Agnikul and NeevCloud branding",
    source: "NDTV",
    date: "Feb 20, 2026",
    readMoreHref: EXTERNAL_LINKS.ndtv,
  },
  {
    id: "agnikul-news18",
    image: "/images/webp/agnikul2.webp",
    imageAlt:
      "Agnikul and NeevCloud exhibition display at a technology conference",
    source: "News18",
    title:
      "Agnikul, NeevCloud to launch space-based AI data centres by year end",
    description:
      "Space-tech firm Agnikul Cosmos on Thursday announced its plans to launch...",
    date: "Feb 12, 2026",
    readMoreHref: EXTERNAL_LINKS.news18,
  },
] as const satisfies readonly AnnouncementCardItem[];
