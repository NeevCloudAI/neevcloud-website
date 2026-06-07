import { WhyAiSupercloudPage } from "@/features/why-ai-supercloud";

import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Why AI SuperCloud | NeevCloud",
  description:
    "Traditional cloud was built for general computing, and later adapted for AI. AI Supercloud is purpose-built for machine learning from the ground up.",
  openGraph: {
    title: "Why AI SuperCloud | NeevCloud",
    description:
      "Traditional cloud was built for general computing, and later adapted for AI. AI Supercloud is purpose-built for machine learning from the ground up.",
  },
};

const WhyAiSupercloudRoutePage = () => {
  return <WhyAiSupercloudPage />;
};

export default WhyAiSupercloudRoutePage;
