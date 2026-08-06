import { TrustCenterPage } from "@/features/trust-center";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/trust-center",
  title: "Trust Center - Security & Compliance | NeevCloud",
  description:
    "Enterprise-grade security, compliance certifications, and transparent operations. Built for teams requiring data sovereignty and trust.",
});

const TrustCenterRoutePage = () => {
  return <TrustCenterPage />;
};

export default TrustCenterRoutePage;
