import NvidiaH100 from "@/features/gpu/components/NvidiaH100";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "NVIDIA H100 | NeevCloud",
  description:
    "NVIDIA H100 is a Hopper-architecture GPU designed for trillion-parameter LLM training and enterprise AI workloads at scale.",
});

const NvidiaH100RoutePage = () => {
  return <NvidiaH100 />;
};

export default NvidiaH100RoutePage;
