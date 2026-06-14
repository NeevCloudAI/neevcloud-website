import NvidiaH200 from "@/features/gpu/components/NvidiaH200";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "NVIDIA H200 | NeevCloud",
  description:
    "NVIDIA H200 is a Hopper-architecture GPU with 141GB HBM3e memory, designed for trillion-parameter LLM training and memory-intensive AI workloads at scale.",
});

const NvidiaH200RoutePage = () => {
  return <NvidiaH200 />;
};

export default NvidiaH200RoutePage;
