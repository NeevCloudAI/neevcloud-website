import type { FaqItem } from "@/shared/data/faq-section-types";

export const WHY_AI_SUPERCLOUD_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "What exactly is an AI Supercloud?",
    answer:
      "Infrastructure designed specifically for AI workloads from the ground up, not a general cloud adapted for machine learning. Purpose-built for training, inference, and deployment.",
  },
  {
    id: 2,
    category: "Billing",
    question: "How is pricing actually transparent?",
    answer:
      "Per-second billing for compute, per-token for inference, published rates with no hidden fees. Real-time cost tracking shows exactly what you're paying as you use resources.",
  },
  {
    id: 3,
    category: "Migration",
    question: "Can I migrate from existing cloud providers?",
    answer:
      "Yes. NeevCloud uses standard frameworks and open APIs. Your PyTorch, TensorFlow, or other code transfers directly without modifications.",
  },
  {
    id: 4,
    category: "Compliance",
    question: "What does data sovereignty mean in practice?",
    answer:
      "Infrastructure operates within India under Indian governance. You control where data lives and who has jurisdiction. Complete data residency controls for compliance.",
  },
  {
    id: 5,
    category: "General",
    question: "Is this only for large companies?",
    answer:
      "No. Solo developers to enterprises use NeevCloud. Instant provisioning and pay-per-use pricing work for any scale. Academic discounts available for students and researchers.",
  },
];
