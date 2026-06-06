import type { FaqItem } from "@/shared/data/faq-section-types";

export const VISIT_PLATFORM_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Platform",
    question: "What can I manage from the NeevCloud console?",
    answer:
      "Deploy and manage GPUs, inference endpoints, storage, and CPU compute from a single dashboard. Monitor workloads, track costs, and control infrastructure without switching between separate portals.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "How quickly can I deploy my first resource?",
    answer:
      "After creating an account and completing the guided onboarding, you can deploy your first GPU instance in 2–5 minutes using pre-configured templates for PyTorch, TensorFlow, Hugging Face, vLLM, and more.",
  },
  {
    id: 3,
    category: "Platform",
    question: "Does the platform support API and CLI access?",
    answer:
      "Yes. Control infrastructure programmatically through REST APIs or the command-line interface. Integrate deployments with CI/CD pipelines, scripts, and automated workflows.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How does billing work on the platform?",
    answer:
      "Real-time cost tracking by service with per-second billing for compute and per-token billing for inference. No hidden fees, with transparent usage dashboards and alerts for cost thresholds.",
  },
  {
    id: 5,
    category: "Monitoring",
    question: "What monitoring capabilities are included?",
    answer:
      "Track GPU utilization, training progress, inference latency, and costs in real time. Set alerts for performance and spending thresholds directly from the console.",
  },
] as const;
