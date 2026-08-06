import { NvmeComponent } from "@/features/nvme";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvme",
  title: "High-Performance NVMe Storage | NeevCloud",
  description:
    "Local NVMe storage for AI workloads. Sub-millisecond latency, high throughput. Keep GPUs saturated, not waiting. ₹4.17/GB/hour.",
});

const NvmePage = () => {
  return <NvmeComponent />;
};

export default NvmePage;
