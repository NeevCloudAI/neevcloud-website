import { TrustCenterPage } from "@/features/trust-center";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Trust Center | NeevCloud",
  description:
    "Enterprise-grade security, international compliance certifications, and transparent operations for teams building mission-critical AI systems.",
});

const TrustCenterRoutePage = () => {
  return <TrustCenterPage />;
};

export default TrustCenterRoutePage;
