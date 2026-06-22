import { CertGuidelinesComponent } from "@/features/cert-guidelines";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/cert-guidelines",
  title: "Certification Guidelines | NeevCloud",
  description:
    "NeevCloud certification guidelines for compliance and security standards.",
});

const CertGuidelinesPage = () => {
  return <CertGuidelinesComponent />;
};

export default CertGuidelinesPage;
