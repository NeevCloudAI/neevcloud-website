import type { StatsByNumbersItem } from "@/shared/types/stats-by-numbers.types";

export const AI_SUPERCLOUD_BY_NUMBERS_SECTION = {
  titlePrefix: "AI Supercloud",
  titleHighlight: "by the Numbers",
} as const;

export const AI_SUPERCLOUD_BY_NUMBERS_ITEMS: readonly StatsByNumbersItem[] = [
  {
    id: "gpu-deployment",
    label: "GPU deployment",
    value: "2-5",
    description: "Minutes to first workload",
    accentLine: { color: "primary-muted" },
  },
  {
    id: "data-sovereignty",
    label: "Data sovereignty",
    value: "100%",
    description: "Residency control",
    accentLine: { color: "primary" },
  },
  {
    id: "hidden-fees",
    label: "Hidden fees",
    value: "Zero",
    description: "No surprise charges, ever",
    accentLine: { color: "gray" },
  },
  {
    id: "billing-granularity",
    label: "Billing granularity",
    value: "Per-sec",
    description: "Pay only what you use",
    accentLine: { color: "primary", dashed: true },
  },
  {
    id: "infrastructure-support",
    label: "Infrastructure support",
    value: "24×7",
    description: "AI infrastructure specialists",
    accentLine: { color: "red" },
  },
  {
    id: "cost-tracking",
    label: "Cost tracking",
    value: "Live",
    description: "Dashboard, no surprises",
    accentLine: { color: "white" },
  },
] as const;
