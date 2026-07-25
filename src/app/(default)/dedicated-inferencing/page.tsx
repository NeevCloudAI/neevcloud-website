import { DedicatedInferencingComponent } from "@/features/dedicated-inferencing";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/dedicated-inferencing",
  title: "Dedicated Inferencing | NeevCloud",
  description:
    "Reserve a GPU instance just for your deployment with NeevCloud Dedicated Inferencing. Always-on endpoints, zero cold starts, full VRAM isolation, and simple hourly billing.",
  openGraphDescription:
    "Reserved GPU inference with no cold starts, full VRAM isolation, and hourly billing on India-resident infrastructure.",
});

const DedicatedInferencingPage = () => {
  return <DedicatedInferencingComponent />;
};

export default DedicatedInferencingPage;
