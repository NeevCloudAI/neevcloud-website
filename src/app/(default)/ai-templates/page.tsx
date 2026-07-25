import { AiTemplatesComponent } from "@/features/ai-templates";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/ai-templates",
  title: "AI Templates | NeevCloud",
  description:
    "Launch pre-configured, GPU-optimized AI environments in one click with NeevCloud AI Templates. Jupyter + PyTorch + CUDA, Stable Diffusion, and vLLM, ready in under 20 seconds.",
  openGraphDescription:
    "One-click, pre-tested AI environments for training, inference, and generative AI workloads on India-resident GPU infrastructure.",
});

const AiTemplatesPage = () => {
  return <AiTemplatesComponent />;
};

export default AiTemplatesPage;
