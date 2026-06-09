import type { Metadata } from "next";
import { ServerlessInferenceComponent } from "@/features/serverless-inference";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Serverless Inference | NeevCloud",
  description:
    "NeevCloud Serverless Inference gives you instant API access to 20+ production-ready open-source models. OpenAI-compatible, sub-50ms latency, billed in INR, with every request processed in India.",
  openGraph: {
    title: "Serverless Inference | NeevCloud",
    description:
      "Instant API access to 20+ production-ready open-source models. OpenAI-compatible, sub-50ms latency, billed in INR on India-resident infrastructure.",
  },
};

const ServerlessInferencePage = () => {
  return <ServerlessInferenceComponent />;
};

export default ServerlessInferencePage;
