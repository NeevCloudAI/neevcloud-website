import { GpuClusterComponent } from "@/features/gpu-cluster";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/gpu-cluster",
  title: "GPU Compute for AI Workloads | On-Demand GPU Infrastructure | NeevCloud",
  description:
    "High-performance GPU compute built for AI training, fine-tuning, and inference. On-demand access, container-native or full VM deployment, transparent pricing, and zero vendor lock-in.",
});

const GpuClusterPage = () => {
  return <GpuClusterComponent />;
};

export default GpuClusterPage;
