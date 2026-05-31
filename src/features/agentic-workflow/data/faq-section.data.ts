import type { FaqItem } from "@/shared/data/faq-section-types";

export const AGENTIC_WORKFLOW_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "How do I deploy agent workflows on NeevCloud?",
    answer:
      "Package agent components as Docker containers and deploy to GPU clusters via Managed Kubernetes (NKS). Pre-built templates available for common orchestration patterns like LangChain, AutoGen, and custom multi-agent setups.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Can agents call hosted models as tools?",
    answer:
      "Yes. OpenAI-compatible API endpoints with function calling, streaming responses, and low-latency inference let agents use multiple models within a single workflow loop.",
  },
  {
    id: 3,
    category: "Scaling",
    question: "How does Kubernetes help manage agent fleets?",
    answer:
      "NKS provides auto-scaling agent pods, service discovery, rolling updates, and standard K8s tooling to deploy and manage hundreds of agents without custom infrastructure.",
  },
  {
    id: 4,
    category: "Scaling",
    question: "What types of agent workloads are supported?",
    answer:
      "Research and analysis, workflow automation, code generation, customer support, data processing, and planning agents. Long-running multi-step pipelines with observability-ready infrastructure.",
  },
  {
    id: 5,
    category: "Networking",
    question: "Where does agent compute run?",
    answer:
      "All agent workloads run on India-resident GPU clusters with container-native isolation, API-accessible inference, and zero egress between components within the same region.",
  },
];
