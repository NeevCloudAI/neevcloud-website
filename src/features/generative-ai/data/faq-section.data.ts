import type { FaqItem } from "@/shared/data/faq-section-types";

export const GENERATIVE_AI_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "What GenAI models can I deploy on NeevCloud?",
    answer:
      "Text generation (vLLM, TGI), image generation (Stable Diffusion, FLUX), multimodal vision-language models, and custom model deployments via pre-built AI Templates.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "How quickly can I launch a production endpoint?",
    answer:
      "One-click deployment via AI Templates lets you launch production-ready endpoints in minutes. Pick a model, get your endpoint, and pay only for what you use.",
  },
  {
    id: 3,
    category: "Scaling",
    question: "Can I build RAG applications on NeevCloud?",
    answer:
      "Yes. RAG-ready architecture includes persistent storage, GPU compute for embeddings, vector database compatibility, and zero egress between components.",
  },
  {
    id: 4,
    category: "Scaling",
    question: "How does scaling work as traffic grows?",
    answer:
      "Manually add or remove GPU instances, or enable auto-scaling based on load. Load balancing is included with per-second billing.",
  },
  {
    id: 5,
    category: "Networking",
    question: "Where is GenAI data processed and stored?",
    answer:
      "All compute and data handling runs on India-native infrastructure with DPDP Act compliance. Data residency and sovereignty supported for product teams and AI startups.",
  },
];
