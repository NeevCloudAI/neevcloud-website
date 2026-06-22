import { ServiceLevelAgreementComponent } from "@/features/service-level-agreement";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/service-level-agreement",
  title: "Service Level Agreement | NeevCloud",
  description:
    "NeevCloud service level agreement covering uptime, support, and service commitments.",
});

const ServiceLevelAgreementPage = () => {
  return <ServiceLevelAgreementComponent />;
};

export default ServiceLevelAgreementPage;
