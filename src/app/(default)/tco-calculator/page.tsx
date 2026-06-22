import { TcoCalculatorComponent } from "@/features/tco-calculator";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/tco-calculator",
  title: "TCO Calculator | NeevCloud",
  description:
    "Compare your GPU cloud infrastructure spend against NeevCloud in under two minutes. Side-by-side cost breakdown vs AWS, GCP, Azure, and Lambda Labs with full line-item transparency.",
  openGraphDescription:
    "Know your GPU cloud cost before you commit. Compare providers with no signup required and exportable results.",
});

const TcoCalculatorRoutePage = () => {
  return <TcoCalculatorComponent />;
};

export default TcoCalculatorRoutePage;
