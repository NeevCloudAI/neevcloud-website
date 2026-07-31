import type { FaqItem } from "@/shared/data/faq-section-types";

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "What is NeevCloud?",
    answer:
      "NeevCloud is India's Sovereign AI Supercloud, offering sovereign, scalable, and AI-native infrastructure to build, train, and deploy AI applications.",
  },
  {
    id: 2,
    category: "General",
    question: "How is NeevCloud different from traditional cloud providers?",
    answer:
      "NeevCloud is purpose-built for AI, providing on-demand GPU access, transparent pricing, data sovereignty, and zero vendor lock-in.",
  },
  {
    id: 3,
    category: "Compliance",
    question: "Does NeevCloud offer data sovereignty and compliance?",
    answer:
      "Yes. Your data remains within India with full residency controls, enterprise-grade security, and compliance-ready infrastructure.",
  },
  {
    id: 4,
    category: "Getting Started",
    question: "How quickly can I access GPU resources on NeevCloud?",
    answer:
      "GPU resources can be provisioned in minutes, enabling teams to start training and deploying AI workloads without delays.",
  },
  {
    id: 5,
    category: "General",
    question: "Can NeevCloud support both startups and enterprises?",
    answer:
      "Yes. Whether you're building your first AI model or scaling enterprise-grade workloads, NeevCloud provides infrastructure that grows with your needs.",
  },
];
