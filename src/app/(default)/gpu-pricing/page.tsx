import { GpuPricingComponent } from "@/features/gpu-pricing";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/gpu-pricing",
  title:
    "GPU Compute for AI Workloads | On-Demand GPU Infrastructure | NeevCloud",
  description:
    "High-performance GPU compute built for AI training, fine-tuning, and inference. On-demand access, container-native or full VM deployment, transparent pricing, and zero vendor lock-in.",
});

const GpuPricingRoutePage = () => {
  return <GpuPricingComponent />;
};

export default GpuPricingRoutePage;
