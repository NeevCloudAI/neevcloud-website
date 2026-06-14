import { GpuClusterComponent } from "@/features/gpu-cluster";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "GPU Cluster | NeevCloud",
  description:
    "One platform. On-demand, reserved, or spot - all on India-sovereign infrastructure. Every instance includes InfiniBand networking, NVMe-attached storage, and pre-built ML images.",
  openGraphDescription:
    "Bare GPU compute on India-sovereign infrastructure with InfiniBand networking, NVMe storage, and pre-built ML images. Live within minutes.",
});

const GpuClusterPage = () => {
  return <GpuClusterComponent />;
};

export default GpuClusterPage;
