import type { Metadata } from "next";
import { ModelPlaygroundComponent } from "@/features/model-playground";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Model Playground | NeevCloud",
  description:
    "Test and explore production-ready AI models through an interactive interface. No code required, no setup needed — just instant access to see what's possible.",
  openGraph: {
    title: "Model Playground | NeevCloud",
    description:
      "Test and explore production-ready AI models through an interactive interface. No code required, no setup needed — just instant access to see what's possible.",
  },
};

const ModelPlaygroundPage = () => {
  return <ModelPlaygroundComponent />;
};

export default ModelPlaygroundPage;
