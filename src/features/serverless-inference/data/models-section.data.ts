import { ModelCardData } from "../types/models-section.types";

export const MODELS: readonly ModelCardData[] = [
  {
    name: "Kimi-K2",
    provider: "Moonshot AI",
    icon: "/icons/kimi-k2.svg",
    tags: [
      { name: "chat", color: "gray-01" },
      { name: "reasoning", color: "gray-02" },
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
      { name: "chat", color: "gray-01" },
      { name: "code", color: "gray-02" },
      { name: "reasoning", color: "gray-03" },
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
      { name: "chat", color: "gray-01" },
      { name: "code", color: "gray-02" },
    ],
    context: "131k",
    price: "₹68.00",
    params: "8B",
  },
  {
    name: "deepseek-v3.2",
    provider: "DeepSeek",
    icon: "/icons/deepseek.svg",
    tags: [{ name: "code", color: "gray-01" }],
    context: "128k",
    price: "₹10.00",
    params: "671B",
  },
  {
    name: "glm-4.7",
    provider: "Zhipu AI",
    icon: "/icons/glm.svg",
    tags: [
      { name: "chat", color: "gray-01" },
      { name: "vision", color: "gray-02" },
      { name: "multilingual", color: "gray-03" },
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
      { name: "text", color: "gray-01" },
      { name: "speech", color: "gray-02" },
      { name: "image", color: "gray-03" },
      { name: "video", color: "gray-80" },
    ],
    context: "205k",
    price: "₹26.00",
    params: "230B",
  },
] as const;
