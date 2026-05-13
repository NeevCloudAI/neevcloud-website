import type { ModelImageCard } from "@/features/serverless-inference/data/models-section-types";

export const MODELS_SECTIONS: ModelImageCard[] = [
  {
    title: "kimi-k2",
    description: "Moonshot AI",
    image: "/icons/Kimi-k2.svg",
    cards: [
      { name: "chat", isActive: true },
      { name: "reasoning", isActive: true },
    ],
    context: "256k",
    pricePerMillion: "₹18.40",
    params: "1T MoE",
  },
  {
    title: "gpt-oss-120b",
    description: "OpenAI",
    image: "/icons/open-ai.svg",
    cards: [
      { name: "chat", isActive: true },
      { name: "code", isActive: true },
      { name: "reasoning", isActive: true },
    ],
    context: "128k",
    pricePerMillion: "₹42.00",
    params: "120B",
  },
  {
    title: "llama-3.1 8b Instant",
    description: "Meta",
    image: "/icons/meta.svg",
    cards: [
      { name: "chat", isActive: true },
      { name: "code", isActive: true },
    ],
    context: "131k",
    pricePerMillion: "₹68.00",
    params: "8B",
  },
  {
    title: "deepseek-v3.2",
    description: "DeepSeek",
    image: "/icons/deepseek.svg",
    cards: [{ name: "code", isActive: true }],
    context: "128k",
    pricePerMillion: "₹10.00",
    params: "671B",
  },
  {
    title: "glm-4.7",
    description: "Zhipu AI",
    image: "/icons/glm.svg",
    cards: [
      { name: "chat", isActive: true },
      { name: "vision", isActive: true },
      { name: "multilingual", isActive: true },
    ],
    context: "200k",
    pricePerMillion: "₹14.00",
    params: "4.7B",
  },
  {
    title: "minimax-m2.7",
    description: "Minimax",
    image: "/icons/minimax.svg",
    cards: [
      { name: "text", isActive: true },
      { name: "speech", isActive: true },
      { name: "image", isActive: true },
      { name: "video", isActive: true },
    ],
    context: "205k",
    pricePerMillion: "₹26.00",
    params: "230B",
  },
];
