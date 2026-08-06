import { AiTemplatesComponent } from "@/features/ai-templates";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/ai-templates",
  title: "AI Templates - Pre-Configured GPU Environments | NeevCloud",
  description:
    "Deploy production-ready GPU environments in seconds. Pre-installed CUDA, PyTorch, TensorFlow, vLLM, and more. No setup, no version conflicts. Runs in India.",
});

const AiTemplatesPage = () => {
  return <AiTemplatesComponent />;
};

export default AiTemplatesPage;
