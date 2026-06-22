import NvidiaNvl72 from "@/features/gpu/components/NvidiaNvl72";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-nvl72",
  title: "NVIDIA GB200 NVL72 | NeevCloud",
  description:
    "NVIDIA GB200 NVL72 powers massive AI workloads with Blackwell architecture, NVLink interconnect, and hyperscale training and inference for next-generation AI factories and datacenters.",
});

const NvidiaNvl72RoutePage = () => {
  return <NvidiaNvl72 />;
};

export default NvidiaNvl72RoutePage;
