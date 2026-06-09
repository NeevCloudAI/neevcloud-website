import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const WORKPLACE_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "collaborative-spaces",
    label: "01",
    iconSrc: "/icons/collab.svg",
    iconAlt: "Collaborative spaces",
    title: "Collaborative Spaces",
    description:
      "Open layouts, quiet focus zones, and team areas built for both deep work and spontaneous collaboration.",
    bullets: [],
  },
  {
    id: "constant-learning",
    label: "02",
    iconSrc: "/icons/book.svg",
    iconAlt: "Constant learning",
    title: "Constant Learning",
    description:
      "Peer knowledge sharing, technical sessions, and the freedom to explore problems outside your immediate role.",
    bullets: [],
  },
  {
    id: "ownership-by-default",
    label: "03",
    iconSrc: "/icons/time-primary.svg",
    iconAlt: "Ownership by default",
    title: "Ownership by Default",
    description:
      "Every person takes responsibility for their domain. No waiting for permission, you drive the outcome that create milestone.",
    bullets: [],
  },
] as const;
