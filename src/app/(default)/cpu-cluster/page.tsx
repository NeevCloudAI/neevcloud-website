import { CpuClusterComponent } from "@/features/cpu-cluster";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/cpu-cluster",
  title: "CPU Compute - Supporting AI Infrastructure | NeevCloud",
  description:
    "CPU instances for AI workloads. API gateways, data pipelines, orchestration. Co-located with GPU clusters, no egress charges.",
});

const CpuClusterPage = () => {
  return <CpuClusterComponent />;
};

export default CpuClusterPage;
