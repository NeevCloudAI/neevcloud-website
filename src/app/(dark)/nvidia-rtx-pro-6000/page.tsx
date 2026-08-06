import NvidiaA6000Se from "@/features/gpu/components/NvidiaA6000Se";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-rtx-pro-6000",
  title: "Nvidia RTX 6000 PRO Blackwell SE | NeevCloud",
  description:
    "Rent Nvidia RTX 6000 PRO Blackwell SE GPUs on-demand for enterprise generative AI deployment, professional visualization, digital twin simulation, and Blackwell-powered AI workloads with 96GB GDDR7 memory.",
});

const NvidiaA6000SeRoutePage = () => {
  return <NvidiaA6000Se />;
};

export default NvidiaA6000SeRoutePage;
