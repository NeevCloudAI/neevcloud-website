import { BFSIComponent } from "@/features/bfsi";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/bfsi",
  title: "AI Infrastructure for BFSI | NeevCloud",
  description:
    "Secure AI infrastructure for banking, fintech, and insurance. Fraud detection, risk modeling, compliance-ready. SOC 2 certified.",
});

const BFSIPage = () => {
  return <BFSIComponent />;
};

export default BFSIPage;
