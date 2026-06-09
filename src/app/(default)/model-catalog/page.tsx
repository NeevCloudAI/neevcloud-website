import type { Metadata } from "next";
import { ModelCatalogComponent } from "@/features/model-catalog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Model Catalog | NeevCloud",
  description:
    "Browse, filter, and test language, vision, and audio models. Every model is production-ready, OpenAI-compatible, and runs on infrastructure within India.",
  openGraph: {
    title: "Model Catalog | NeevCloud",
    description:
      "Browse, filter, and test language, vision, and audio models. Every model is production-ready, OpenAI-compatible, and runs on infrastructure within India.",
  },
};

const ModelCatalogPage = () => {
  return <ModelCatalogComponent />;
};

export default ModelCatalogPage;
