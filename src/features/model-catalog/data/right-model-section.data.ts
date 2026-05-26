import type { ModelPricingRow } from "@/features/model-catalog/types/right-model-section.types";

export const MODEL_PRICING_ROWS: readonly ModelPricingRow[] = [
  {
    id: "kimi-k2-instruct",
    model: {
      title: "Kimi K2 Instruct",
      description: "p50 50ms • 1000+ tok/s",
    },
    provider: "Moonshot AI",
    size: "128K",
    context: "128K",
    inputPrice: "₹4.17",
    outputPrice: "₹6.68",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "llama-3.1-405b",
    model: {
      title: "Llama 3.1 405B",
      description: "p50 50ms • 1000+ tok/s",
    },
    provider: "Meta",
    size: "405B",
    context: "128K",
    inputPrice: "₹73.48",
    outputPrice: "₹100.20",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "glm-4.5",
    model: {
      title: "GLM 4.5",
      description: "p50 50ms • 1000+ tok/s",
    },
    provider: "Zhipu AI",
    size: "9B",
    context: "128K",
    inputPrice: "₹12.50",
    outputPrice: "₹25.00",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "gpt-oss-120b",
    model: {
      title: "GPT-OSS-120B",
      description: "p50 50ms • 1000+ tok/s",
    },
    provider: "OpenAI",
    size: "120B",
    context: "128K",
    inputPrice: "₹41.75",
    outputPrice: "₹125.25",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "minimax-m2.7",
    model: {
      title: "MiniMax-M2.7",
      description: "p50 50ms • 1000+ tok/s",
    },
    provider: "MiniMax",
    size: "230B",
    context: "205K",
    inputPrice: "₹73.48",
    outputPrice: "₹100.20",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
] as const;
