import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const BFSI_AMBITION_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "analytics",
    label: "01 · ANALYTICS",
    iconSrc: "/icons/protected.svg",
    iconAlt: "Analytics",
    title: "AI-Powered Analytics",
    description:
      "Deploy fraud detection models, credit risk analysis, and customer behavior prediction on GPU infra designed for financial workloads.",
    bullets: [
      { id: 1, title: "Real-time fraud detection" },
      { id: 2, title: "Credit scoring models" },
      { id: 3, title: "Portfolio risk analysis" },
      { id: 4, title: "Customer churn prediction" },
    ],
  },
  {
    id: "performance",
    label: "02 · PERFORMANCE",
    iconSrc: "/icons/bank.svg",
    iconAlt: "Performance",
    title: "GPU-Accelerated Workloads",
    description:
      "Run complex financial simulations, high-frequency trading analytics, and quantitative modeling with H100, H200, and A100 GPUs.",
    bullets: [
      { id: 1, title: "Sub-ms latency, trading models" },
      { id: 2, title: "Multi-GPU risk simulations" },
      { id: 4, title: "Spot instances for batch" },
    ],
  },
  {
    id: "india-first",
    label: "03 · INDIA FIRST",
    iconSrc: "/icons/file.svg",
    iconAlt: "India First",
    title: "Data Sovereignty",
    description:
      "Infrastructure operates within India with complete data residency guarantees, critical for financial institutions managing customer data.",
    bullets: [
      { id: 1, title: "India-based infrastructure" },
      { id: 2, title: "Data residency guarantees" },
      { id: 3, title: "Regulatory compliance support" },
      { id: 4, title: "No cross-border data transfer" },
    ],
  },
] as const;
