import type { ModelActionItem } from "../types/model-action-section.types";

export const MODEL_ACTION_ITEMS: readonly ModelActionItem[] = [
  {
    id: "minimax-m3",
    name: "MiniMax-M3",
    provider: "MiniMax",
    context: "1M",
    pricing: "$0.60 / $2.40 per 1M tokens",
  },
  {
    id: "gpt-oss-120b",
    name: "GPT OSS 120B",
    provider: "OpenAI",
    context: "128K",
    pricing: "$0.10 / $0.50 per 1M tokens",
  },
  {
    id: "deepseek-v3-2",
    name: "DeepSeek-V3.2",
    provider: "DeepSeek",
    context: "128K",
    pricing: "$0.28 / $0.42 per 1M tokens",
  },
  {
    id: "glm-4-7",
    name: "GLM-4.7",
    provider: "Zhipu AI",
    context: "200K",
    pricing: "$0.60 / $2.20 per 1M tokens",
  },
  {
    id: "llama-3.3-70b-versatile",
    name: "Llama 3.3 70B",
    provider: "Meta",
    context: "131K",
    pricing: "$0.59 / $0.79 per 1M tokens",
  },
] as const;
