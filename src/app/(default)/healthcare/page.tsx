import { HealthcareComponent } from "@/features/healthcare";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Healthcare | NeevCloud",
  description:
    "From medical imaging to drug discovery, healthcare AI requires infrastructure that's secure, compliant, and performant. NeevCloud provides GPU compute designed for medical workloads with certifications healthcare organizations need.",
  openGraphDescription:
    "Secure, compliant GPU compute for medical imaging, drug discovery, and healthcare AI workloads on India-resident infrastructure.",
});

const HealthcarePage = () => {
  return <HealthcareComponent />;
};

export default HealthcarePage;
