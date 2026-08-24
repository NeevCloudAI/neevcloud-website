import AmdMi300x from "@/features/gpu/components/AmdMi300x";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/amd-mi300x",
  title: "AMD MI300X | NeevCloud",
  description:
    "AMD Instinct MI300X is a data center GPU built on CDNA 3 architecture with 192GB HBM3 memory, designed for large-scale LLM training and inference workloads.",
});

const AmdMi300xRoutePage = () => {
  return <AmdMi300x />;
};

export default AmdMi300xRoutePage;
