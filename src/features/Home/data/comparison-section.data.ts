import type { ComparisonSummaryCard } from "../types/comparison-section.types";

export const WITH_NEEVCLOUD_SUMMARY_CARDS: ComparisonSummaryCard[] = [
  {
    id: "cost-reduction",
    title: "73%",
    subtitle: "Cost Reduction",
    subtitle2: "vs. hyperscale on-demand",
    description:
      "Committed capacity plus idle reclamation. Your finance team will notice.",
  },
  {
    id: "throughput",
    title: "10x",
    subtitle: "Throughput",
    subtitle2: "Faster iteration on large runs",
    description:
      "Deterministic interconnect eliminates straggler nodes in distributed training.",
  },
  {
    id: "low-latency",
    title: "30%",
    subtitle: "Low Latency",
    subtitle2: "Guaranteed Reduction",
    description:
      "Removing the limits of geography and latency to redefine how AI is deployed and scaled.",
  },
];

export const WITHOUT_NEEVCLOUD_SUMMARY_CARDS: ComparisonSummaryCard[] = [
  {
    id: "cost-overhead",
    title: "5x",
    subtitle: "Cost",
    subtitle2: "Cloud Costs",
    description:
      "Hyperscaler on-demand pricing with no committed capacity benefits. Unpredictable bills, no idle reclamation.",
  },
  {
    id: "throughput",
    title: "10x",
    subtitle: "Throughput",
    subtitle2: "Slower iteration on large runs",
    description:
      "Straggler nodes in distributed training kill throughput. Non-deterministic interconnects bottleneck large runs.",
  },
  {
    id: "low-latency",
    title: "30%+",
    subtitle: "Low Latency",
    subtitle2: "Overhead",
    description:
      "Geographic constraints and variable network paths add latency, unpredictable at scale.",
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
