import { AiInferenceComponent } from "@/features/ai-inference";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/ai-inference",
  title: "AI Inference | NeevCloud",
  description:
    "Managed inference endpoints with low latency, OpenAI-compatible APIs, and India-resident infrastructure. Deploy custom or open-source models with pay-per-token pricing.",
  openGraphDescription:
    "Serve AI models at production scale on India-resident infrastructure. OpenAI-compatible APIs, managed GPU serving, and usage-based pricing.",
});

const AiInferenceRoutePage = () => {
  return <AiInferenceComponent />;
};

export default AiInferenceRoutePage;
