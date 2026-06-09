import FooterComponent from "@/shared/components/footer";
import CertGuidelinesHeroSection from "./CertGuidelinesHeroSection";
import { CERT_GUIDELINES_FOOTER } from "../constants/cert-guidelines-page.constants";

const CertGuidelinesPage = () => {
  return (
    <>
      <CertGuidelinesHeroSection />
      <FooterComponent {...CERT_GUIDELINES_FOOTER} />
    </>
  );
};

export default CertGuidelinesPage;
