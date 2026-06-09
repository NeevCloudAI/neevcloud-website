import type { Metadata } from "next";
import { ModelApiComponent } from "@/features/model-api";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Model API | NeevCloud",
  description:
    "Integrate modern AI models into your applications with clean, well-documented APIs. From prototype to production in minutes, not weeks.",
  openGraph: {
    title: "Model API | NeevCloud",
    description:
      "Integrate modern AI models into your applications with clean, well-documented APIs. From prototype to production in minutes, not weeks.",
  },
};

const ModelApiPage = () => {
  return <ModelApiComponent />;
};

export default ModelApiPage;
