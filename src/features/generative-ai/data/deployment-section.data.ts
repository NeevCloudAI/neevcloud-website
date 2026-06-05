import type { GenerativeAiDeploymentOption } from "../types/deployment-section.types";

export const GENERATIVE_AI_DEPLOYMENT_SECTION = {
  titlePrefix: "Deploy in",
  titleHighlight: "minutes",
  description: "OpenAI-compatible across the board.",
} as const;

export const GENERATIVE_AI_DEPLOYMENT_OPTIONS: GenerativeAiDeploymentOption[] =
  [
    { id: "deploy-vllm", label: "Deploy vLLM" },
    { id: "rag-pipeline", label: "RAG Pipeline" },
    { id: "image-generation", label: "Image Generation" },
    { id: "streaming-chat", label: "Streaming Chat" },
    { id: "batch-processing", label: "Batch Processing" },
  ];
