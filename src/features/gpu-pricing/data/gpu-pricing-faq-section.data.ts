import type { FaqItem } from "@/shared/data/faq-section-types";

export const GPU_PRICING_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question:
      "What's the difference between GPU AI Service and GPU VM Service?",
    answer:
      "GPU AI Service: Container-native, Kubernetes-managed pods. GPU VM Service: Full Linux VMs with complete OS control. Same GPU hardware, different deployment models.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "How is billing calculated?",
    answer:
      "Per-second billing for all GPU instances. Charged only while instances run. Storage billed separately (NVMe per hour, network storage per month). No hidden fees.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can I switch between on-demand and reserved?",
    answer:
      "Yes. Start on-demand, commit later for discounts. Reserved capacity can be modified with 30-day notice. No penalty for starting on-demand.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What storage is included?",
    answer:
      "First 25GB local NVMe free per GPU. Additional NVMe at ₹4.17/GB/hour. Network storage (S3-compatible) at ₹2/GB/month. Zero egress* within the India region.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Where are GPUs located?",
    answer:
      "All GPU infrastructure operates within India. Low-latency for Indian teams, data sovereignty guaranteed. No cross-border data transfer.",
  },
];
