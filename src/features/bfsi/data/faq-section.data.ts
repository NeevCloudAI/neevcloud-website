import type { FaqItem } from "@/shared/data/faq-section-types";

export const BFSI_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Compliance",
    question: "How does NeevCloud support BFSI compliance requirements?",
    answer:
      "SOC 2 Type II and ISO 27001 certified. Infrastructure within India for data residency. Encryption, audit logging, and access controls meeting financial industry standards.",
  },
  {
    id: 2,
    category: "General",
    question: "What GPU infrastructure is available for financial modeling?",
    answer:
      "H100, H200, A100 GPUs available as single instances or multi-GPU clusters. InfiniBand networking for distributed training and simulations.",
  },
  {
    id: 3,
    category: "Performance",
    question: "Can we deploy real-time fraud detection systems?",
    answer:
      "Yes. Serverless inference API with sub-50ms latency for real-time transaction monitoring. GPU instances for model training and batch processing.",
  },
  {
    id: 4,
    category: "Security",
    question: "How is data security handled?",
    answer:
      "Encryption at rest and in transit. Role-based access controls. Network isolation. SOC 2 Type II certified infrastructure. Audit logging for compliance.",
  },
  {
    id: 5,
    category: "Billing",
    question: "What pricing models are available for BFSI workloads?",
    answer:
      "On-demand hourly billing and reserved capacity with discounts. All pricing in INR. Dedicated account management for enterprise agreements.",
  },
];
