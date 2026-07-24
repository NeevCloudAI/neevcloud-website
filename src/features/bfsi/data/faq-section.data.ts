import type { FaqItem } from "@/shared/data/faq-section-types";

export const BFSI_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "How does NeevCloud support BFSI compliance requirements?",
    answer:
      "Infrastructure operates within India. All computing and storage resources are located within national boundaries under Indian jurisdiction.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "What GPU infrastructure is available for financial modeling?",
    answer:
      "H100, H200, A100 GPUs available as single instances or multi-GPU clusters.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can we deploy real-time fraud detection systems?",
    answer:
      "Yes. Serverless inference API with sub-50ms latency for real-time transaction monitoring. GPU instances for model training and batch processing.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How is data security handled?",
    answer:
      "Encryption at rest and in transit. Role-based access controls. Network isolation. SOC 2 Type II certified infrastructure. Audit logging for compliance.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "What pricing models are available for BFSI workloads?",
    answer:
      "On-demand hourly billing and reserved capacity with discounts. All pricing in INR. Dedicated account management for enterprise agreements.",
  },
];
