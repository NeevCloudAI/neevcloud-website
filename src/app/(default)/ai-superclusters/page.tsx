import { AiSuperclustersComponent } from "@/features/ai-superclusters";
import { AI_SUPERCLUSTERS_FAQ_ITEMS } from "@/features/ai-superclusters/data/faq-section.data";
import { buildFaqSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";
import JsonLd from "@/shared/components/JsonLd";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/ai-superclusters",
  title: "AI Superclusters · Build-to-Suit GPU Clusters | NeevCloud",
  description:
    "NeevCloud AI Superclusters — 1K to 16K-GPU build-to-suit deployments at the Raipur AI Gigacampus. GB300 NVL72, GB200 NVL72, B300, B200, H200, H100. Reserve now or run on-demand from India's sovereign AI cloud.",
});

const AiSuperclustersPage = () => {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "AI Superclusters",
          description:
            "Build-to-suit AI Superclusters from 1,000 to 16,000 GPUs, deployed at NeevCloud's AI Gigacampus in Raipur, India.",
          path: "/ai-superclusters",
          serviceType: "GPU Cloud Infrastructure",
        })}
      />
      <JsonLd data={buildFaqSchema(AI_SUPERCLUSTERS_FAQ_ITEMS)} />
      <AiSuperclustersComponent />
    </>
  );
};

export default AiSuperclustersPage;
