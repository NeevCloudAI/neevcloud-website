import type { Metadata } from "next";
import { AiInferenceComponent } from "@/features/ai-inference";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "AI Inference | NeevCloud",
  description:
    "Managed inference endpoints with low latency, OpenAI-compatible APIs, and India-resident infrastructure. Deploy custom or open-source models with pay-per-token pricing.",
  openGraph: {
    title: "AI Inference | NeevCloud",
    description:
      "Serve AI models at production scale on India-resident infrastructure. OpenAI-compatible APIs, managed GPU serving, and usage-based pricing.",
  },
};

const AiInferenceRoutePage = () => {
  return <AiInferenceComponent />;
};

export default AiInferenceRoutePage;
