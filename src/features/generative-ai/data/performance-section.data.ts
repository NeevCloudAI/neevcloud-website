import { GenerativeAiPerformanceCard } from "../types/performance-section.types";

export const GENERATIVE_AI_PERFORMANCE_CARDS: readonly GenerativeAiPerformanceCard[] =
  [
    {
      id: "text-generation-latency",
      title: "Text Generation Latency",
      subtitle: "Llama 3.1 70B · 1x H100, vLLM",
      metrics: [
        { id: "ttft", label: "TTFT", value: "42ms" },
        { id: "tokens-per-sec", label: "Tokens/sec", value: "42ms" },
        { id: "concurrent-max", label: "Concurrent (max)", value: "128" },
        { id: "throughput", label: "Throughput", value: "10,880 tok/s" },
        {
          id: "cost-per-1m-tokens",
          label: "Cost / 1M tokens",
          value: "₹22.55 in · ₹70.97 out",
        },
      ],
    },
    {
      id: "image-generation",
      title: "Image Generation",
      subtitle: "FLUX.1 Dev · 1x H100",
      metrics: [
        {
          id: "time-per-image",
          label: "Time per image (1024²)",
          value: "3.2s",
        },
        { id: "batch-4-images", label: "Batch · 4 images", value: "8.1s" },
        { id: "images-per-hour", label: "Images / hour", value: "1,125" },
        { id: "gpu-utilization", label: "GPU utilization", value: "94%" },
        { id: "cost-per-image", label: "Cost / image", value: "₹0.53" },
      ],
    },
    {
      id: "embedding-generation",
      title: "Embedding Generation",
      subtitle: "text-embedding-3 · 1x A100",
      metrics: [
        { id: "throughput", label: "Throughput", value: "12,500 emb/s" },
        { id: "latency-single", label: "Latency (single)", value: "8ms" },
        { id: "optimal-batch", label: "Optimal batch", value: "256" },
        {
          id: "cost-per-1m-embeddings",
          label: "Cost / 1M embeddings",
          value: "₹0.35",
        },
      ],
    },
    {
      id: "rag-end-to-end",
      title: "RAG End-to-End",
      subtitle: "CPU retrieval + H100 generation",
      metrics: [
        { id: "query-embedding", label: "Query embedding", value: "8ms" },
        { id: "context-retrieval", label: "Context retrieval", value: "12ms" },
        { id: "llm-ttft", label: "LLM TTFT", value: "42ms" },
        { id: "total-ttft", label: "Total TTFT", value: "86ms" },
      ],
    },
  ] as const;

export const GENERATIVE_AI_PERFORMANCE_DESCRIPTION =
  "Real workloads on production hardware. Measured at p50 over 50 runs per configuration on NeevCloud production infrastructure.";
