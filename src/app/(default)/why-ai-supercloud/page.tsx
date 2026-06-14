import { WhyAiSupercloudPage } from "@/features/why-ai-supercloud";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Why AI SuperCloud | NeevCloud",
  description:
    "Traditional cloud was built for general computing, and later adapted for AI. AI Supercloud is purpose-built for machine learning from the ground up.",
});

const WhyAiSupercloudRoutePage = () => {
  return <WhyAiSupercloudPage />;
};

export default WhyAiSupercloudRoutePage;
