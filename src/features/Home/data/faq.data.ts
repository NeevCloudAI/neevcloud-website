import type { FaqItem } from "@/shared/data/faq-section-types";

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "What is NeevCloud's AI SuperCloud?",
    answer:
      "A full-stack AI cloud built in India: on-demand GPU and CPU compute, managed Kubernetes, high-performance storage, and a complete inference platform (serverless endpoints, model APIs, and a playground) — everything you need to train, fine-tune, and serve models from one console, CLI, or API.",
  },
  {
    id: 2,
    category: "General",
    question: "Which GPUs can I get, and how fast?",
    answer:
      "NVIDIA B200, H200, H100, A100 and more, from single instances to multi-node clusters with high-bandwidth interconnect. Single instances spin up in minutes from the console or CLI; dedicated clusters are provisioned in days, not months.",
  },
  {
    id: 3,
    category: "Billing",
    question: "How does pricing work?",
    answer:
      "Transparent per-hour rates with committed-capacity discounts for reserved clusters. What you see is what you pay — no hidden egress fees or surprise line items. Idle reclamation on committed capacity keeps effective costs well below hyperscale on-demand rates.",
  },
  {
    id: 4,
    category: "Compliance",
    question: "Where does my data live? Is it sovereign?",
    answer:
      "Your data stays in India, in facilities operating under strict global standards — AICPA SOC 2, ISO 9001, ISO 27002 and ISO 27018. You keep complete control over data residency and compliance, which matters for BFSI, healthcare, defence, and the public sector.",
  },
  {
    id: 5,
    category: "Migration",
    question: "Can I migrate from AWS, GCP, or Azure?",
    answer:
      "Yes — and back out again if you ever want to. NeevCloud is built on open standards: Kubernetes orchestration, S3-compatible object storage, and typed SDKs for every major runtime. No vendor lock-in, no walled gardens.",
  },
  {
    id: 6,
    category: "Support",
    question: "What support comes with the platform?",
    answer:
      "24x7 support from the engineers who built the platform — not a ticket queue. Every plan includes responsive engineering support, and dedicated clusters come with a named team that knows your workloads.",
  },
];
