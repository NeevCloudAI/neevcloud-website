import { LlmTrainingComponent } from "@/features/llm-training";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/llm-training",
  title: "LLM Fine-Tuning - GPU Infrastructure | NeevCloud",
  description:
    "Fine-tune LLMs on H100 and A100 GPUs. Multi-node setups, framework agnostic, fast NVMe storage. India-resident infrastructure.",
});

const LlmTrainingPage = () => {
  return <LlmTrainingComponent />;
};

export default LlmTrainingPage;
