import { BFSIComponent } from "@/features/bfsi";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "AI Infrastructure for BFSI | NeevCloud",
  description:
    "From fraud detection to risk modeling, BFSI workloads demand infrastructure that's secure, compliant, and performant. NeevCloud provides GPU compute and AI infrastructure designed for banking, fintech, and insurance.",
  openGraphDescription:
    "Secure, compliant GPU compute for banking, fintech, and insurance. Fraud detection, risk modeling, and AI analytics on India-resident infrastructure.",
});

const BFSIPage = () => {
  return <BFSIComponent />;
};

export default BFSIPage;
