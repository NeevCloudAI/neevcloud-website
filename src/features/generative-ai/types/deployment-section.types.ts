export type GenerativeAiDeploymentOptionId =
  | "deploy-vllm"
  | "rag-pipeline"
  | "image-generation"
  | "streaming-chat"
  | "batch-processing";

export type GenerativeAiDeploymentOption = {
  id: GenerativeAiDeploymentOptionId;
  label: string;
};
