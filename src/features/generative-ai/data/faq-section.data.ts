import type { FaqItem } from "@/shared/data/faq-section-types";

export const GENERATIVE_AI_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "What GenAI models are available?",
    answer:
      "20+ models including Llama 3.1, Kimi K2, GLM 4.5, DeepSeek, FLUX, Stable Diffusion. Deploy via API or pre-built templates. Custom models supported.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "How does pricing work for production apps?",
    answer:
      "Pay per token for inference APIs (input/output billed separately). GPU instances are billed per second. No minimum commitment. Free tier: 2,00,000 tokens/day.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can I build RAG applications?",
    answer:
      "Yes. Use embedding endpoints for vector generation, S3-compatible storage for documents, and GPU instances for generation. Zero egress between components.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How do I scale for production traffic?",
    answer:
      "Add GPU replicas manually or enable autoscaling. Load balancing included. Scale from 1 to 100+ instances without code changes.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Where is the data processed?",
    answer:
      "All inference, storage, and processing happen within India. Data never leaves Indian infrastructure. DPDP Act compliant.",
  },
];
