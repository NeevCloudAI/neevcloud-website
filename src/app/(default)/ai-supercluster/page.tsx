import { AiSuperclusterComponent } from "@/features/ai-supercluster";
import { AI_SUPERCLUSTER_FAQ_ITEMS } from "@/features/ai-supercluster/data/faq-section.data";
import { buildFaqSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";
import JsonLd from "@/shared/components/JsonLd";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/ai-supercluster",
  title: "AI Supercluster · Build-to-Suit GPU Clusters | NeevCloud",
  description:
    "NeevCloud AI Supercluster — 1K to 16K-GPU build-to-suit deployments at the Raipur AI Gigacampus. GB300 NVL72, GB200 NVL72, B300, B200, H200, H100. Reserve now or run on-demand from India's sovereign AI cloud.",
});

const AiSuperclusterPage = () => {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "AI Supercluster",
          description:
            "Build-to-suit AI Supercluster from 1,000 to 16,000 GPUs, deployed at NeevCloud's AI Gigacampus in Raipur, India.",
          path: "/ai-supercluster",
          serviceType: "GPU Cloud Infrastructure",
        })}
      />
      <JsonLd data={buildFaqSchema(AI_SUPERCLUSTER_FAQ_ITEMS)} />
      <AiSuperclusterComponent />
    </>
  );
};

export default AiSuperclusterPage;
