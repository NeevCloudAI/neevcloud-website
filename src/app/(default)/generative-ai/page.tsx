import { GenerativeAiComponent } from "@/features/generative-ai";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Generative AI | NeevCloud",
  description:
    "Power your GenAI products on Indian infrastructure. One-click deployment, RAG-ready architecture, and elastic scaling for text, image, and multimodal applications.",
  openGraphDescription:
    "Build and scale GenAI products with production inference, RAG pipelines, and India-native data on H100 and A100 GPU infrastructure.",
});

const GenerativeAiPage = () => {
  return <GenerativeAiComponent />;
};

export default GenerativeAiPage;
