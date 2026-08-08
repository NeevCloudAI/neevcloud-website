import NvidiaH200 from "@/features/gpu/components/NvidiaH200";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-h200",
  title: "NVIDIA HGX H200 GPU by NeevCloud| High-Performance GPU",
  description:
    "Deploy NVIDIA H200 GPUs with 141GB HBM3e memory. Faster than H100 for LLM training, inference, and HPC",
});

const NvidiaH200RoutePage = () => {
  return <NvidiaH200 />;
};

export default NvidiaH200RoutePage;
