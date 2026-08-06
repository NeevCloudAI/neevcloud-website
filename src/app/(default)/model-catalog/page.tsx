import { ModelCatalogComponent } from "@/features/model-catalog";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/model-catalog",
  title: "Model Catalog - Browse AI Models | NeevCloud",
  description:
    "Browse 20+ production-ready AI models. View performance, pricing, and capabilities. Test instantly or deploy via API.",
});

const ModelCatalogPage = () => {
  return <ModelCatalogComponent />;
};

export default ModelCatalogPage;
