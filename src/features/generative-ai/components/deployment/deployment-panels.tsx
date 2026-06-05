import BatchProcessingContent from "./BatchProcessingContent";
import DeployVllmContent from "./DeployVllmContent";
import ImageGenerationContent from "./ImageGenerationContent";
import RagPipelineContent from "./RagPipelineContent";
import StreamingChatContent from "./StreamingChatContent";

export const GENERATIVE_AI_DEPLOYMENT_PANELS = [
  DeployVllmContent,
  RagPipelineContent,
  ImageGenerationContent,
  StreamingChatContent,
  BatchProcessingContent,
] as const;
