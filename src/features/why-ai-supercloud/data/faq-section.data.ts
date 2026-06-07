import type { FaqItem } from "@/shared/data/faq-section-types";

export const WHY_AI_SUPERCLOUD_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Overview",
    question: "What is AI Supercloud?",
    answer:
      "AI Supercloud is infrastructure purpose-built for machine learning from the ground up — not general compute adapted for AI. It covers GPU access, training, inference, storage, and orchestration in one platform designed for how modern AI teams work.",
  },
  {
    id: 2,
    category: "Infrastructure",
    question: "How is AI Supercloud different from traditional cloud?",
    answer:
      "Traditional cloud optimizes for general workloads with complex tiers, long GPU provisioning times, and opaque billing. AI Supercloud offers 2–5 minute GPU deployment, per-second billing, transparent pricing, open standards, and sovereign infrastructure options within India.",
  },
  {
    id: 3,
    category: "Pricing",
    question: "How does billing work on AI Supercloud?",
    answer:
      "Per-second billing with real-time cost tracking in the dashboard. No hidden fees, no per-hour minimums, and no surprise charges. You pay for actual usage across compute and inference workloads.",
  },
  {
    id: 4,
    category: "Data",
    question: "Where does my data reside?",
    answer:
      "Infrastructure runs within India with complete residency controls. Your training data, models, and workloads stay under your jurisdiction — supporting compliance with DPDP Act requirements and enterprise data sovereignty needs.",
  },
  {
    id: 5,
    category: "Getting Started",
    question: "How quickly can I deploy my first GPU workload?",
    answer:
      "Deploy GPUs in 2–5 minutes using pre-configured templates for PyTorch, TensorFlow, Hugging Face, vLLM, and more. No waiting lists, no multi-week approval processes, and no steep setup curve.",
  },
] as const;
