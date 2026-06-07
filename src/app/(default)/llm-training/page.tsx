import type { Metadata } from "next";
import { LlmTrainingComponent } from "@/features/llm-training";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "LLM Fine-Tuning | NeevCloud",
  description:
    "Purpose-built GPU infrastructure for domain adaptation, instruction tuning, and RLHF. H100 and A100 clusters with framework-agnostic fine-tuning in India.",
  openGraph: {
    title: "LLM Fine-Tuning | NeevCloud",
    description:
      "Fine-tune LLMs at scale on H100 and A100 clusters. LoRA, QLoRA, RLHF, and multi-modal training with India-resident compute.",
  },
};

const LlmTrainingPage = () => {
  return <LlmTrainingComponent />;
};

export default LlmTrainingPage;
