import { ModelApiComponent } from "@/features/model-api";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/model-api",
  title: "Model API | NeevCloud",
  description:
    "Integrate modern AI models into your applications with clean, well-documented APIs. From prototype to production in minutes, not weeks.",
});

const ModelApiPage = () => {
  return <ModelApiComponent />;
};

export default ModelApiPage;
