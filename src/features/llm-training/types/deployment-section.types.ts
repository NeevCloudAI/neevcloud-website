export type DeploymentOptionId =
  | "single-node-lora"
  | "multi-node-distributed"
  | "huggingface-lora"
  | "deepspeed-zero-3"
  | "axolotl-yaml";

export type DeploymentOption = {
  id: DeploymentOptionId;
  label: string;
};
