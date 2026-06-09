import type { Metadata } from "next";
import { NvmeComponent } from "@/features/nvme";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NVMe Storage | NeevCloud",
  description:
    "Eliminate I/O bottlenecks with local NVMe disks that keep your GPUs saturated, not waiting. Training large models and running data-intensive inference pipelines demands storage that can keep pace.",
  openGraph: {
    title: "NVMe Storage | NeevCloud",
    description:
      "High-performance NVMe storage with sub-millisecond latency and high sequential throughput. Keep your GPUs saturated during training and inference workloads.",
  },
};

const NvmePage = () => {
  return <NvmeComponent />;
};

export default NvmePage;
