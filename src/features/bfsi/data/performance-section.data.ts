import type { PerformanceMetric } from "@/features/bfsi/types/performance-section.types";

export const PERFORMANCE_METRICS: readonly PerformanceMetric[] = [
  {
    id: "uptime-sla",
    value: "99.9",
    unit: "%",
    title: "Uptime SLA",
    description: "tier III · audited",
  },
  {
    id: "inference-latency",
    value: "<1",
    unit: "ms",
    title: "Inference latency",
    description: "trading models · p50",
  },
  {
    id: "soc2-certified",
    value: "SOC 2",
    unit: "type II",
    title: "Certified",
    description: "TIA 942 · ISO 27001",
  },
  {
    id: "enterprise-support",
    value: "24/7",
    title: "Enterprise support",
    description: "dedicated team",
  },
] as const;
