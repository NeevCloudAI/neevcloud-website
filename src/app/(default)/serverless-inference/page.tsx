import { ServerlessInferenceComponent } from "@/features/serverless-inference";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/serverless-inference",
  title: "Inference APIs - OpenAI-Compatible | NeevCloud",
  description:
    "OpenAI-compatible inference API built for seamless integration. Run in India with transparent pricing. Switch with a single line of code. Start free today.",
});

const ServerlessInferencePage = () => {
  return <ServerlessInferenceComponent />;
};

export default ServerlessInferencePage;
