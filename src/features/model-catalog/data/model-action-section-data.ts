export type ModelActionItem = {
  id: string;
  name: string;
  provider: string;
  context: string;
  latency: string;
};

export const MODEL_ACTION_ITEMS: readonly ModelActionItem[] = [
  {
    id: "llama-3.1-8b-instant",
    name: "llama-3.1-8b-instant",
    provider: "Meta",
    context: "131K",
    latency: "p50 75ms",
  },
  {
    id: "kimi-k2",
    name: "kimi-k2",
    provider: "Moonshot",
    context: "128K",
    latency: "p50 50ms",
  },
  {
    id: "deepseek-v3.2",
    name: "deepseek-v3.2",
    provider: "DeepSeek",
    context: "128K",
    latency: "p50 80ms",
  },
  {
    id: "glm-4.7",
    name: "GLM 4.7",
    provider: "Zhipu AI",
    context: "200K context",
    latency: "p50 80ms",
  },
  {
    id: "gpt-oss-120B",
    name: "GPT OSS 120B",
    provider: "Open AI",
    context: "128K context",
    latency: "p50 80ms",
  },
  {
    id: "minimax-m2.7-highspeed",
    name: "MiniMax-M2.7-highspeed",
    provider: "Open AI",
    context: "205K context",
    latency: "p50 80ms",
  },
] as const;

export const PROMPT_SUGGESTIONS: readonly string[] = [
  "Summarize the Q3 earnings call",
  "Explain RAG to a non-engineer",
  "Translate 'production-ready' to Hindi",
  "Write a Python function for cosine similarity",
] as const;

export const MODEL_ACTION_TOTAL_COUNT = 20;
