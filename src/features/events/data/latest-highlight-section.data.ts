import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type { LatestHighlightMetadataItem } from "../types/latest-highlight-section.types";

export const LATEST_HIGHLIGHT_SECTION = {
  title: "Latest Highlight",
  badge: "KubeCon India 2026",
  heading: "NeevCloud at India's Premier Kubernetes Conference",
  description:
    "NeevCloud met builders and operators at KubeCon India 2026, India's premier Kubernetes and cloud-native conference. The team showcased GPU-accelerated, Kubernetes-native infrastructure built for scaling AI workloads across India.",
  metadata: [
    { id: "year", label: "18-19 June, 2026", icon: "calendar" },
    { id: "location", label: "Mumbai, India", icon: "map-pinned" },
    { id: "category", label: "Conference · Cloud-Native", icon: "star" },
  ] satisfies readonly LatestHighlightMetadataItem[],
  primaryCta: "Read Recap",
  primaryCtaRoute: EXTERNAL_LINKS.neevcloudLinkedin,
  primaryCtaTarget: "_blank",
  image: "/images/webp/supercloud.webp",
  imageAlt: "NeevCloud team at KubeCon India 2026",
} as const;
