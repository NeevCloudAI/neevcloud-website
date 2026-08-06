import NvidiaH100 from "@/features/gpu/components/NvidiaH100";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-h100",
  title: "NVIDIA H100 GPU - High-Performance AI | NeevCloud",
  description:
    "Deploy NVIDIA H100 GPUs for LLM training, inference, and HPC. 80GB HBM3, NVLink connectivity, India infrastructure. Available now.",
});

const NvidiaH100RoutePage = () => {
  return <NvidiaH100 />;
};

export default NvidiaH100RoutePage;
