import { CpuClusterComponent } from "@/features/cpu-cluster";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "CPU Cluster | NeevCloud",
  description:
    "Model API gateways, data pipelines, orchestration control planes, and monitoring stacks - every AI deployment needs CPU alongside its GPUs. NeevCloud CPU instances are co-located with GPU clusters in the same private network.",
  openGraphDescription:
    "Deploy CPU instances co-located with GPU clusters on the same private network. No egress charges between CPU and GPU workloads in India datacenters.",
});

const CpuClusterPage = () => {
  return <CpuClusterComponent />;
};

export default CpuClusterPage;
