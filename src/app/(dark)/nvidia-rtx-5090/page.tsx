import Nvidia5090 from "@/features/gpu/components/Nvidia5090";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-rtx-5090",
  title: "NVIDIA RTX 5090 | NeevCloud",
  description:
    "Rent NVIDIA RTX 5090 GPUs on-demand for 8K rendering, professional content creation, AI-powered video editing, and real-time 3D rendering with 32GB GDDR7 memory.",
});

const Nvidia5090RoutePage = () => {
  return <Nvidia5090 />;
};

export default Nvidia5090RoutePage;
