import { DedicatedInferencingComponent } from "@/features/dedicated-inferencing";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/dedicated-inferencing",
  title: "Dedicated Inferencing - Reserved GPUs for Your Models | NeevCloud",
  description:
    "Reserve a GPU instance just for your model. No sharing, no cold starts, full VRAM isolation, and predictable latency. Deploy from the catalogue or bring your own Hugging Face model. Hourly billing.",
});

const DedicatedInferencingPage = () => {
  return <DedicatedInferencingComponent />;
};

export default DedicatedInferencingPage;
