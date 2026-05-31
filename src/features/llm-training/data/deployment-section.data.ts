import type { DeploymentOption } from "../types/deployment-section.types";

export const LLM_DEPLOYMENT_SECTION = {
  titlePrefix: "Deploy Your",
  titleHighlight: "First Workload",
  description:
    "Four primitives, create, deploy, train, scale. Same CLI surface, same auth, same cluster.",
} as const;

export const DEPLOYMENT_OPTIONS: DeploymentOption[] = [
  { id: "single-node-lora", label: "Single-Node LoRA" },
  { id: "multi-node-distributed", label: "Multi-Node Distributed" },
  { id: "huggingface-lora", label: "HuggingFace + LoRA" },
  { id: "deepspeed-zero-3", label: "DeepSpeed ZeRO-3" },
  { id: "axolotl-yaml", label: "Axolotl YAML" },
];
