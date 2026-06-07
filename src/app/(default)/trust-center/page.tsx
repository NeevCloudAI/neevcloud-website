import { TrustCenterPage } from "@/features/trust-center";

import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Trust Center | NeevCloud",
  description:
    "Enterprise-grade security, international compliance certifications, and transparent operations for teams building mission-critical AI systems.",
  openGraph: {
    title: "Trust Center | NeevCloud",
    description:
      "Enterprise-grade security, international compliance certifications, and transparent operations for teams building mission-critical AI systems.",
  },
};

const TrustCenterRoutePage = () => {
  return <TrustCenterPage />;
};

export default TrustCenterRoutePage;
