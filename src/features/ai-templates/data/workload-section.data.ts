export type WorkloadTemplateGroup = {
  title: string;
  items: readonly string[];
};

export const AI_TEMPLATES_WORKLOAD_GROUPS: readonly WorkloadTemplateGroup[] = [
  {
    title: "Training & Fine-Tuning",
    items: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "Axolotl"],
  },
  {
    title: "Inference & Deployment",
    items: ["vLLM", "Triton Inference Server", "Ollama"],
  },
  {
    title: "Generative AI",
    items: ["Stable Diffusion WebUI", "ComfyUI", "SDXL", "AnimateDiff"],
  },
] as const;
