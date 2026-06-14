import { ModelCatalogComponent } from "@/features/model-catalog";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Model Catalog | NeevCloud",
  description:
    "Browse, filter, and test language, vision, and audio models. Every model is production-ready, OpenAI-compatible, and runs on infrastructure within India.",
});

const ModelCatalogPage = () => {
  return <ModelCatalogComponent />;
};

export default ModelCatalogPage;
