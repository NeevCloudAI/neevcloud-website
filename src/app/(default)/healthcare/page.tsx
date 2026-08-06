import { HealthcareComponent } from "@/features/healthcare";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/healthcare",
  title: "AI Cloud for Healthcare & Medical Research | NeevCloud",
  description:
    "Secure AI infrastructure for medical imaging, diagnostics, and research. HIPAA-aligned, ISO 27001 certified. GPU compute for healthcare.",
});

const HealthcarePage = () => {
  return <HealthcareComponent />;
};

export default HealthcarePage;
