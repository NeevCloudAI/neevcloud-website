import NvidiaTeslaT4 from "@/features/gpu/components/NvidiaTeslaT4";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-teslat4",
  title: "NVIDIA Tesla T4 | NeevCloud",
  description:
    "Rent NVIDIA Tesla T4 GPUs on-demand for production AI inference, intelligent video analytics, virtual desktop infrastructure, and cost-effective deep learning deployment with 16GB GDDR6 memory.",
});

const NvidiaTeslaT4RoutePage = () => {
  return <NvidiaTeslaT4 />;
};

export default NvidiaTeslaT4RoutePage;
