import type { Metadata } from "next";
import { CertGuidelinesComponent } from "@/features/cert-guidelines";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Certification Guidelines | NeevCloud",
  description:
    "NeevCloud certification guidelines for compliance and security standards.",
  openGraph: {
    title: "Certification Guidelines | NeevCloud",
    description:
      "NeevCloud certification guidelines for compliance and security standards.",
  },
};

const CertGuidelinesPage = () => {
  return <CertGuidelinesComponent />;
};

export default CertGuidelinesPage;
