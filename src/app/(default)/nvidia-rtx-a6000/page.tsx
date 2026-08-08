import NvidiaA6000 from "@/features/gpu/components/NvidiaA6000";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-rtx-a6000",
  title: "NVIDIA RTX A6000 | NeevCloud",
  description:
    "Rent NVIDIA RTX A6000 GPUs on-demand for professional 3D rendering, AI-powered CAD workflows, photorealistic visualization, and enterprise virtual workstations with 48GB GDDR6 memory.",
});

const NvidiaA6000RoutePage = () => {
  return <NvidiaA6000 />;
};

export default NvidiaA6000RoutePage;
