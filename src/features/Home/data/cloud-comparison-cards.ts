import type { CloudComparisonCardItem } from "../types/cloud-comparison-card.types";

export const CLOUD_COMPARISON_CARDS: CloudComparisonCardItem[] = [
  {
    id: "no-vendor-lockin",
    title: "No Vendor Lock-in",
    description:
      "Move your data and models freely. We believe in technology freedom, not walled gardens.",
    iconSrc: "/icons/chain.svg",
  },
  {
    id: "transparent-pricing",
    title: "Transparent Pricing",
    description:
      "What you see is what you pay. No hidden egress fees or surprise billing.",
    iconSrc: "/icons/tag.svg",
  },
  {
    id: "sovereign-secure",
    title: "Sovereign & Secure",
    description:
      "Your data stays within your control, protected by rigorous international security standards and local compliance.",
    iconSrc: "/icons/secure.svg",
  },
];
