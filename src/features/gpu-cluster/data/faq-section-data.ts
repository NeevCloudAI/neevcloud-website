import type { FaqItem } from "@/shared/data/faq-section-types";

export const GPU_CLUSTER_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "How quickly can I launch a GPU instance?",
    answer:
      "Available GPUs deploy within 2–5 minutes. Select your GPU, configure storage, and launch. Instances are ready when status shows 'Running'.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "What's included in the hourly price?",
    answer:
      "GPU compute, vCPU, RAM, InfiniBand networking, DDoS protection, and pre-built ML images. Persistent storage billed separately.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can I switch between GPUs?",
    answer:
      "Yes. Stop your current instance, launch a new one with a different GPU, and attach your persistent storage to continue work.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What happens when my reserved plan ends?",
    answer:
      "Instance automatically switches to on-demand pricing. You'll receive notification 7 days before plan expiry.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Is data kept within India?",
    answer:
      "Yes. All infrastructure operates within India. Your data never leaves Indian data centers unless you explicitly transfer it out.",
  },
];
