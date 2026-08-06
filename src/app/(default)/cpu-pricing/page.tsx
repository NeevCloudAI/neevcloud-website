import { CpuPricingComponent } from "@/features/cpu-pricing";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/cpu-pricing",
  title: "CPU Compute - Supporting AI Infrastructure | NeevCloud",
  description:
    "Flexible CPU instances for data preprocessing, APIs, databases, and orchestration. Deploy in seconds with transparent per-hour pricing.",
});

const CpuPricingRoutePage = () => {
  return <CpuPricingComponent />;
};

export default CpuPricingRoutePage;
