import { GpuAiServiceComponent } from "@/features/gpu-ai-service";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/gpu-ai-service",
  title:
    "GPU Compute for AI Workloads | On-Demand GPU Infrastructure | NeevCloud",
  description:
    "Deploy H100, A100, RTX 5090, and more. On-demand or reserved capacity. InfiniBand networking, billed in INR, India infrastructure.",
});

const GpuAiServicePage = () => {
  return <GpuAiServiceComponent />;
};

export default GpuAiServicePage;
