import NvidiaB200 from "@/features/gpu/components/NvidiaB200";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-b200",
  title: "NVIDIA HGX B200 GPU by NeevCloud| High-Performance GPU",
  description:
    "Deploy NVIDIA B200 GPUs with Blackwell architecture. 2.5x faster than H200 for LLM training and inference. ",
});

const NvidiaB200RoutePage = () => {
  return <NvidiaB200 />;
};

export default NvidiaB200RoutePage;
