import type { ModelCardData } from "@/features/serverless-inference/data/models-section-types";

export const MODELS: readonly ModelCardData[] = [
  {
    name: "Kimi-K2",
    provider: "Moonshot AI",
    icon: "/icons/kimi-k2.svg",
    tags: [
      { name: "chat", color: "gray-60" },
      { name: "reasoning", color: "blue-40" },
    ],
    context: "256k",
    price: "₹18.40",
    params: "1T MoE",
  },
  {
    name: "gpt-oss-120b",
    provider: "OpenAI",
    icon: "/icons/openai.svg",
    tags: [
      { name: "chat", color: "gray-60" },
      { name: "code", color: "blue-40" },
      { name: "reasoning", color: "gray-75" },
    ],
    context: "128k",
    price: "₹42.00",
    params: "120B",
  },
  {
    name: "llama-3.1 8b Instant",
    provider: "Meta",
    icon: "/icons/meta.svg",
    tags: [
      { name: "chat", color: "gray-60" },
      { name: "code", color: "blue-40" },
    ],
    context: "131k",
    price: "₹68.00",
    params: "8B",
  },
  {
    name: "deepseek-v3.2",
    provider: "DeepSeek",
    icon: "/icons/deepseek.svg",
    tags: [{ name: "code", color: "gray-60" }],
    context: "128k",
    price: "₹10.00",
    params: "671B",
  },
  {
    name: "glm-4.7",
    provider: "Zhipu AI",
    icon: "/icons/glm.svg",
    tags: [
      { name: "chat", color: "gray-60" },
      { name: "vision", color: "blue-40" },
      { name: "multilingual", color: "gray-85" },
    ],
    context: "200k",
    price: "₹14.00",
    params: "4.7B",
  },
  {
    name: "minimax-m2.7",
    provider: "Minimax",
    icon: "/icons/minimax.svg",
    tags: [
      { name: "text", color: "gray-60" },
      { name: "speech", color: "blue-40" },
      { name: "image", color: "gray-85" },
      { name: "video", color: "gray-75" },
    ],
    context: "205k",
    price: "₹26.00",
    params: "230B",
  },
] as const;
