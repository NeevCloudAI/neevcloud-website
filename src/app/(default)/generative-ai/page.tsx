import type { Metadata } from "next";
import { GenerativeAiComponent } from "@/features/generative-ai";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Generative AI | NeevCloud",
  description:
    "Power your GenAI products on Indian infrastructure. One-click deployment, RAG-ready architecture, and elastic scaling for text, image, and multimodal applications.",
  openGraph: {
    title: "Generative AI | NeevCloud",
    description:
      "Build and scale GenAI products with production inference, RAG pipelines, and India-native data on H100 and A100 GPU infrastructure.",
  },
};

const GenerativeAiPage = () => {
  return <GenerativeAiComponent />;
};

export default GenerativeAiPage;
