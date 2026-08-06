import { ModelApiComponent } from "@/features/model-api";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/model-api",
  title: "Model API - Production AI Models | NeevCloud",
  description:
    "Integrate state-of-the-art AI models through simple APIs. From language to vision, deploy in minutes with transparent pricing.",
});

const ModelApiPage = () => {
  return <ModelApiComponent />;
};

export default ModelApiPage;
