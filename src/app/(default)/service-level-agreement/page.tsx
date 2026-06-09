import type { Metadata } from "next";
import { ServiceLevelAgreementComponent } from "@/features/service-level-agreement";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Service Level Agreement | NeevCloud",
  description: "NeevCloud service level agreement covering uptime, support, and service commitments.",
  openGraph: {
    title: "Service Level Agreement | NeevCloud",
    description: "NeevCloud service level agreement covering uptime, support, and service commitments.",
  },
};

const ServiceLevelAgreementPage = () => {
  return <ServiceLevelAgreementComponent />;
};

export default ServiceLevelAgreementPage;
