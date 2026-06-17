import type { FeatureCardProps } from "@/shared/components/feature-card";

export const DATA_JURISDICTION_SECTION = {
  titlePrefix: "Your ",
  titleHighlight1: "Data",
  titleMiddle: ", Your ",
  titleHighlight2: "Jurisdiction",
  description:
    "Infrastructure operates within India under Indian governance. Complete control over data location and regulatory compliance.",
} as const;

export const DATA_JURISDICTION_CARDS: FeatureCardProps[] = [
  {
    title: "Data Security",
    image: "/icons/shield.svg",
    description:
      "Encryption at rest and in transit. Multi-zone redundancy. Automated backup and recovery.",
  },
  {
    title: "Regulatory Compliance",
    image: "/icons/compliance.svg",
    description:
      "Designed to meet requirements for Indian government, defense, healthcare, and finance.",
  },
  {
    title: "Transparent Data Handling",
    image: "/icons/data-handling.svg",
    description:
      "Clear policies on data access, retention, and deletion. No third-party access.",
  },
];
