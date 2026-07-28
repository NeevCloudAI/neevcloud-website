import { ModelCardData } from "../types/models-section.types";

export const MODELS: readonly ModelCardData[] = [
  {
    name: "minimax-m3",
    provider: "MiniMax",
    icon: "/icons/minimax.svg",
    tags: [
      { name: "multimodal", color: "gray-01" },
      { name: "frontier coding", color: "gray-02" },
    ],
    context: "1M",
    price: "₹57.97",
    params: "205K",
  },
  {
    name: "gpt-oss-120b",
    provider: "OpenAI",
    icon: "/icons/openai.svg",
    tags: [
      { name: "general purpose", color: "gray-01" },
      { name: "open weights", color: "gray-02" },
    ],
    context: "128k",
    price: "₹9.66",
    params: "120B",
  },
  {
    name: "llama-3.1 8b Instant",
    provider: "Meta",
    icon: "/icons/meta.svg",
    tags: [
      { name: "low latency", color: "gray-01" },
      { name: "general purpose", color: "gray-02" },
    ],
    context: "131k",
    price: "₹4.83",
    params: "8B",
  },
  {
    name: "deepseek-v3.2",
    provider: "DeepSeek",
    icon: "/icons/deepseek.svg",
    tags: [
      { name: "general purpose", color: "gray-01" },
      { name: "reasoning", color: "gray-02" },
      { name: "agent", color: "gray-03" },
    ],
    context: "128k",
    price: "₹27.05",
    params: "671B total",
  },
  {
    name: "glm-4.7",
    provider: "Zhipu AI",
    icon: "/icons/glm.svg",
    tags: [
      { name: "coding", color: "gray-01" },
      { name: "agentic", color: "gray-02" },
      { name: "tool use", color: "gray-03" },
    ],
    context: "200k",
    price: "₹57.97",
    params: "4.7B",
  },
  {
    name: "minimax-m2.7",
    provider: "MiniMax",
    icon: "/icons/minimax.svg",
    tags: [
      { name: "general purpose", color: "gray-01" },
      { name: "open weights", color: "gray-02" },
    ],
    context: "205k",
    price: "₹28.99",
    params: "230B",
  },
] as const;
