import type { ModelInfoCardData } from "@/shared/types/model-info-card.types";

export const MODEL_INFORMATION: readonly ModelInfoCardData[] = [
  {
    id: "kimi-k2-instruct",
    name: "Kimi K2 Instruct",
    provider: "Moonshot AI · 128K",
    latency: "p50 50ms",
    bestFor: "Chat, reasoning, long-context tasks",
    metrics: [
      { label: "CONTEXT", value: "128K" },
      { label: "THROUGHPUT", value: "1000+ TOK/S" },
      { label: "INPUT /1M", value: "₹4.17" },
      { label: "OUTPUT /1M", value: "₹6.68" },
    ],
  },
  {
    id: "llama-3-1-405b",
    name: "Llama 3.1 405B",
    provider: "Meta · 405B",
    latency: "p50 100ms",
    bestFor: "Reasoning, creative tasks, code generation",
    metrics: [
      { label: "CONTEXT", value: "128K" },
      { label: "THROUGHPUT", value: "800+ TOK/S" },
      { label: "INPUT /1M", value: "₹73.48" },
      { label: "OUTPUT /1M", value: "₹100.20" },
    ],
  },
  {
    id: "hermes-4-405b",
    name: "Hermes 4 405B",
    provider: "NousResearch · 405B",
    latency: "p50 100ms",
    bestFor: "Task completion, agent workflows",
    metrics: [
      { label: "CONTEXT", value: "128K" },
      { label: "THROUGHPUT", value: "800+ TOK/S" },
      { label: "INPUT /1M", value: "₹73.48" },
      { label: "OUTPUT /1M", value: "₹100.20" },
    ],
  },
  {
    id: "glm-4-5",
    name: "GLM 4.5",
    provider: "Zhipu AI · 9B",
    latency: "p50 50ms",
    bestFor: "Multilingual, vision, general tasks",
    metrics: [
      { label: "CONTEXT", value: "128K" },
      { label: "THROUGHPUT", value: "1200+ TOK/S" },
      { label: "INPUT /1M", value: "₹12.50" },
      { label: "OUTPUT /1M", value: "₹25.00" },
    ],
  },
  {
    id: "llama-3-1-70b",
    name: "Llama 3.1 70B",
    provider: "Meta · 70B",
    latency: "p50 75ms",
    bestFor: "General-purpose tasks, balanced performance",
    metrics: [
      { label: "CONTEXT", value: "128K" },
      { label: "THROUGHPUT", value: "700+ TOK/S" },
      { label: "INPUT /1M", value: "₹22.55" },
      { label: "OUTPUT /1M", value: "₹70.97" },
    ],
  },
  {
    id: "gpt-oss-120b",
    name: "GPT-OSS-120B",
    provider: "OpenAI · 120B",
    latency: "p50 80ms",
    bestFor: "General-purpose, versatile across tasks",
    metrics: [
      { label: "CONTEXT", value: "128K" },
      { label: "THROUGHPUT", value: "800+ TOK/S" },
      { label: "INPUT /1M", value: "₹73.48" },
      { label: "OUTPUT /1M", value: "₹100.20" },
    ],
  },
] as const;
