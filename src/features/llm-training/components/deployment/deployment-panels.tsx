import AxolotlYamlContent from "./AxolotlYamlContent";
import DeepSpeedZeroContent from "./DeepSpeedZeroContent";
import HuggingFaceLoraContent from "./HuggingFaceLoraContent";
import MultiNodeDistributedContent from "./MultiNodeDistributedContent";
import SingleNodeLoraContent from "./SingleNodeLoraContent";

export const DEPLOYMENT_PANELS = [
  SingleNodeLoraContent,
  MultiNodeDistributedContent,
  HuggingFaceLoraContent,
  DeepSpeedZeroContent,
  AxolotlYamlContent,
] as const;
