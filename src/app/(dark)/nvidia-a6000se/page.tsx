import NvidiaA6000Se from "@/features/gpu/components/NvidiaA6000Se";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-a6000se",
  title: "NVIDIA RTX PRO 6000 SE | NeevCloud",
  description:
    "Rent NVIDIA RTX PRO 6000 SE GPUs on-demand for enterprise generative AI deployment, professional visualization, digital twin simulation, and Blackwell-powered AI workloads with 96GB GDDR7 memory.",
});

const NvidiaA6000SeRoutePage = () => {
  return <NvidiaA6000Se />;
};

export default NvidiaA6000SeRoutePage;
