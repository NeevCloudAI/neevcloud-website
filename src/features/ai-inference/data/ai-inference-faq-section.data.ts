import type { FaqItem } from "@/shared/data/faq-section-types";

export const AI_INFERENCE_FAQ: readonly FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "How do I deploy a custom model for inference?",
    answer:
      "Upload HuggingFace weights, fine-tuned checkpoints, LoRA adapters, or GGUF models. NeevCloud provisions GPU serving (vLLM or TGI), exposes an OpenAI-compatible endpoint, and handles scaling and health checks.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Is the API OpenAI-compatible?",
    answer:
      "Yes. Use standard chat completions, embeddings, and function-calling schemas. Point existing SDKs and agents at NeevCloud endpoints with minimal code changes.",
  },
  {
    id: 3,
    category: "Pricing",
    question: "How is inference billed?",
    answer:
      "Input and output tokens are billed separately with no minimum commitment. A free tier includes 2,00,000 tokens per day. You pay only for tokens processed, not idle GPU time.",
  },
  {
    id: 4,
    category: "Compliance",
    question: "Where does inference run?",
    answer:
      "All endpoints are hosted on India-resident infrastructure with DPDP-aligned data residency. No cross-border transfer for inference requests or model weights stored in-region.",
  },
  {
    id: 5,
    category: "Models",
    question: "Which model formats are supported?",
    answer:
      "HuggingFace Hub models, custom fine-tunes, LoRA/QLoRA adapters, and GGUF quantized weights. Image generation workloads support FLUX and Stable Diffusion families.",
  },
] as const;
