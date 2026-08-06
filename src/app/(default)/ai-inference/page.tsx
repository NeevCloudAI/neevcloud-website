import { AiInferenceComponent } from "@/features/ai-inference";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/ai-inference",
  title: "AI Inference - Managed Model Endpoints | NeevCloud",
  description:
    "Managed inference endpoints with low latency and OpenAI-compatible APIs. Deploy custom models on India infrastructure. Pay per token.",
});

const AiInferenceRoutePage = () => {
  return <AiInferenceComponent />;
};

export default AiInferenceRoutePage;
