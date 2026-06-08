import type { FaqItem } from "@/shared/data/faq-section-types";

export const AGENTIC_WORKFLOW_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "What makes NeevCloud good for AI agents?",
    answer:
      "Kubernetes-native orchestration for agent fleets, persistent compute for long-running workflows, low-latency model endpoints, and integrated observability. Deploy agents as containers with GPU access.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Can agents run continuously?",
    answer:
      "Yes. Deploy agents as always-on Kubernetes pods. State persists across restarts. Sessions can run for hours or days without interruption.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "How do agents access models?",
    answer:
      "Call hosted models via OpenAI-compatible API endpoints. Models support function calling, streaming, and tool use. Sub-50ms inference latency for agent decision-making.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How do I monitor agent behavior?",
    answer:
      "Integrate with Prometheus, Grafana, and standard logging tools. Track agent metrics, model calls, tool usage, and costs in real time.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "What's the pricing for agent workloads?",
    answer:
      "Pay for GPU/CPU compute (per-second billing) plus model API usage (per-token). No additional fees for orchestration or monitoring. Scale agents up/down based on workload.",
  },
];
