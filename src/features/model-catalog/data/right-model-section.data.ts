import type { ModelPricingRow } from "../types/right-model-section.types";

export const MODEL_PRICING_ROWS: readonly ModelPricingRow[] = [
  {
    id: "minimax-m3",
    model: {
      title: "MiniMax-M3",
      description: "Multimodal coding • Frontier coding",
    },
    provider: "MiniMax",
    size: "205K",
    context: "1M",
    inputPrice: "₹57.97",
    outputPrice: "₹231.89",
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
      description: "Top real-world engineering • Professional office delivery",
    },
    provider: "MiniMax",
    size: "230B",
    context: "205K",
    inputPrice: "₹28.99",
    outputPrice: "₹115.95",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "minimax-m2.7-highspeed",
    model: {
      title: "MiniMax-M2.7-highspeed",
      description: "Polyglot code mastery • Low latency",
    },
    provider: "MiniMax",
    size: "230B",
    context: "205K",
    inputPrice: "₹57.97",
    outputPrice: "₹231.89",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "gpt-oss-20b",
    model: {
      title: "GPT OSS 20B",
      description:
        "Optimized for cost-efficient deployment • Strong for agentic workflows",
    },
    provider: "OpenAI",
    size: "20B",
    context: "131K",
    inputPrice: "₹7.25",
    outputPrice: "₹28.99",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "gpt-oss-120b",
    model: {
      title: "GPT OSS 120B",
      description: "Optimized for reasoning and agentic tasks",
    },
    provider: "OpenAI",
    size: "120B",
    context: "128K",
    inputPrice: "₹9.66",
    outputPrice: "₹48.31",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "deepseek-v3-2",
    model: {
      title: "DeepSeek-V3.2",
      description:
        "Sparse attention optimized for long context • Thinking-mode tool calls",
    },
    provider: "DeepSeek",
    size: "671B total",
    context: "128K",
    inputPrice: "₹27.05",
    outputPrice: "₹40.58",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "glm-4-7",
    model: {
      title: "GLM-4.7",
      description:
        "Improved multilingual coding and terminal agents • Front-end generation",
    },
    provider: "Zhipu AI",
    size: "4.7B",
    context: "200K",
    inputPrice: "₹57.97",
    outputPrice: "₹212.57",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "llama-3.3-70b-versatile",
    model: {
      title: "Llama 3.3 70B",
      description: "High-quality generation • Strong multilingual capability",
    },
    provider: "Meta",
    size: "70B",
    context: "131K",
    inputPrice: "₹57.01",
    outputPrice: "₹76.33",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
  {
    id: "llama-3.1-8b-instant",
    model: {
      title: "Llama 3.1 8B Instant",
      description: "Function calling support • Structured output / JSON mode",
    },
    provider: "Meta",
    size: "8B",
    context: "131K",
    inputPrice: "₹4.83",
    outputPrice: "₹7.73",
    actions: {
      tryHref: "#",
      docsHref: "#",
      deployHref: "#",
    },
  },
] as const;
