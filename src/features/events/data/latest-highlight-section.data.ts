import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type { LatestHighlightMetadataItem } from "../types/latest-highlight-section.types";

export const LATEST_HIGHLIGHT_SECTION = {
  title: "Latest Highlight",
  badge: "India AI Impact Summit 2026",
  heading: "Sovereign End-to-End SuperAI Cloud Platform",
  description:
    "NeevCloud showcased its Sovereign End-to-End SuperAI Cloud Platform at India AI Impact Summit 2026, built for large-scale AI workloads in India. The platform demonstrates India-first infrastructure: data sovereignty, GPU scale, and AI-native design - all in one stack.",
  metadata: [
    { id: "year", label: "2026", icon: "calendar" },
    { id: "location", label: "Mumbai, India", icon: "map-pinned" },
    { id: "category", label: "Summit · Showcase", icon: "star" },
  ] satisfies readonly LatestHighlightMetadataItem[],
  primaryCta: "View Showcase",
  primaryCtaRoute: "/visit-platform",
  primaryCtaTarget: "_self",
  secondaryCta: "Read Recap",
  secondaryCtaRoute: EXTERNAL_LINKS.neevcloudLinkedin,
  secondaryCtaTarget: "_blank",
  image: "/images/supercloud.png",
  imageAlt:
    "NeevCloud booth at India AI Impact Summit 2026 showcasing the Sovereign End-to-End SuperAI Cloud Platform",
} as const;
