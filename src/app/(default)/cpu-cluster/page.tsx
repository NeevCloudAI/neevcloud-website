import type { Metadata } from "next";
import { CpuClusterComponent } from "@/features/cpu-cluster";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "CPU Cluster | NeevCloud",
  description:
    "Model API gateways, data pipelines, orchestration control planes, and monitoring stacks — every AI deployment needs CPU alongside its GPUs. NeevCloud CPU instances are co-located with GPU clusters in the same private network.",
  openGraph: {
    title: "CPU Cluster | NeevCloud",
    description:
      "Deploy CPU instances co-located with GPU clusters on the same private network. No egress charges between CPU and GPU workloads in India datacenters.",
  },
};

const CpuClusterPage = () => {
  return <CpuClusterComponent />;
};

export default CpuClusterPage;
