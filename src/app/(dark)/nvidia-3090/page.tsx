import Nvidia3090 from "@/features/gpu/components/Nvidia3090";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia/3090",
  title: "NVIDIA RTX 3090 | NeevCloud",
  description:
    "Rent NVIDIA RTX 3090 GPUs on-demand for professional video production, 3D modeling, machine learning prototyping, and high-resolution rendering with 24GB GDDR6X memory.",
});

const Nvidia3090RoutePage = () => {
  return <Nvidia3090 />;
};

export default Nvidia3090RoutePage;
