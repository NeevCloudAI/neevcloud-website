import { TcoCalculatorComponent } from "@/features/tco-calculator";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/tco-calculator",
  title: "TCO Calculator - Compare GPU Cloud Costs | NeevCloud",
  description:
    "Compare GPU infrastructure costs in 2 minutes. NeevCloud vs AWS, GCP, Azure. Full transparency, no signup required. Calculate now.",
});

const TcoCalculatorRoutePage = () => {
  return <TcoCalculatorComponent />;
};

export default TcoCalculatorRoutePage;
