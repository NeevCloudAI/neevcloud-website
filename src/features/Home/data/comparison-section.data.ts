import type { ComparisonSummaryCard } from "../types/comparison-section.types";

export const COMPARISON_SUMMARY_CARDS: ComparisonSummaryCard[] = [
  {
    id: "cost-reduction",
    title: "73%",
    subtitle: "Cost Reduction",
    subtitle2: "vs. hyperscale on-demand",
    description: "Committed capacity plus idle reclamation.",
    description2: "Your finance team will notice.",
  },
  {
    id: "throughput",
    title: "10x",
    subtitle: "Throughput",
    subtitle2: "Faster iteration on large runs",
    description: "Deterministic interconnect eliminates",
    description2: "straggler nodes in distributed training.",
  },
  {
    id: "low-latency",
    title: "30%",
    subtitle: "Low Latency",
    subtitle2: "Guaranteed Reduction",
    description: "Removing the limits of geography and",
    description2: "latency to redefine how AI is deployed and scaled.",
  },
];

export const WITH_NEEVCLOUD_BULLETS = [
  "Purpose-built for AI workloads",
  "Transparent, predictable pricing",
  "Open standards, full portability",
  "Data sovereignty controls",
  "GPU access in minutes",
] as const;

export const WITHOUT_NEEVCLOUD_BULLETS = [
  "General cloud adapted for AI",
  "Complex pricing with hidden costs",
  "Proprietary lock-in",
  "Data scattered globally",
  "Weeks for GPU access",
] as const;
