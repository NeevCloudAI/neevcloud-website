import { WhyAiSupercloudPage } from "@/features/why-ai-supercloud";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/why-ai-supercloud",
  title: "Why AI Supercloud - Built for AI | NeevCloud",
  description:
    "AI Supercloud vs traditional cloud. Purpose-built infrastructure with instant access, transparent pricing, and data sovereignty.",
});

const WhyAiSupercloudRoutePage = () => {
  return <WhyAiSupercloudPage />;
};

export default WhyAiSupercloudRoutePage;
