import { GenerativeAiComponent } from "@/features/generative-ai";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/generative-ai",
  title: "Generative AI Infrastructure - GPU Compute | NeevCloud",
  description:
    "Build and scale GenAI products on India infrastructure. RAG pipelines, multimodal apps, production inference. No minimum commitment.",
});

const GenerativeAiPage = () => {
  return <GenerativeAiComponent />;
};

export default GenerativeAiPage;
