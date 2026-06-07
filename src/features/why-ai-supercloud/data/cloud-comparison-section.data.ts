import type { ComparisonTableRow } from "@/shared/types/comparison-table-section.types";

export const CLOUD_COMPARISON_SECTION = {
  titlePrefix: "Traditional Cloud vs",
  titleHighlight: "AI Supercloud",
  description:
    "Not all cloud is created equal. AI Supercloud is purpose-built, from GPU access time to billing model to data sovereignty. Here's how they compare across every dimension that matters.",
  traditionalColumnLabel: "Traditional Cloud",
  supercloudColumnLabel: "AI Supercloud",
} as const;

export const CLOUD_COMPARISON_ROWS: readonly ComparisonTableRow[] = [
  {
    id: "gpu-access",
    aspect: "GPU Access",
    traditional: "Days to weeks",
    supercloud: "2-5 minutes",
  },
  {
    id: "pricing",
    aspect: "Pricing",
    traditional: "Complex tiers, hidden fees",
    supercloud: "Transparent per-second billing",
  },
  {
    id: "infrastructure",
    aspect: "Infrastructure",
    traditional: "General compute adapted for AI",
    supercloud: "Purpose-built for AI workloads",
  },
  {
    id: "cost-predictability",
    aspect: "Cost Predictability",
    traditional: "Surprise charges common",
    supercloud: "Real-time tracking, no surprises",
  },
  {
    id: "vendor-lock-in",
    aspect: "Vendor Lock-In",
    traditional: "Proprietary tools and APIs",
    supercloud: "Open standards, full portability",
  },
  {
    id: "data-control",
    aspect: "Data Control",
    traditional: "Scattered across regions",
    supercloud: "Sovereign infrastructure option",
  },
  {
    id: "billing-model",
    aspect: "Billing Model",
    traditional: "Per-hour with minimums",
    supercloud: "Per-second, pay actual usage",
  },
  {
    id: "setup-complexity",
    aspect: "Setup Complexity",
    traditional: "Steep learning curve",
    supercloud: "Pre-configured templates",
  },
  {
    id: "support",
    aspect: "Support",
    traditional: "Generic cloud assistance",
    supercloud: "AI infrastructure specialists",
  },
  {
    id: "optimization",
    aspect: "Optimization",
    traditional: "Manual tuning required",
    supercloud: "AI-native by design",
  },
] as const;
