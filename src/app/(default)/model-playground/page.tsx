import { ModelPlaygroundComponent } from "@/features/model-playground";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/model-playground",
  title: "Model Playground - Test AI Models Free | NeevCloud",
  description:
    "Test AI models instantly in browser. No signup, no setup. Compare outputs, validate use cases. Try LLMs and image models free.",
});

const ModelPlaygroundPage = () => {
  return <ModelPlaygroundComponent />;
};

export default ModelPlaygroundPage;
