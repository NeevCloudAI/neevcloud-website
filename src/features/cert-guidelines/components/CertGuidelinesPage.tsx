import FooterComponent from "@/shared/components/footer";
import CertGuidelinesHeroSection from "./CertGuidelinesHeroSection";
import { CERT_GUIDELINES_FOOTER } from "../constants/cert-guidelines-page.constants";
import CertGuidelinesContentSection from "./CertGuidelinesContentSection";

const CertGuidelinesPage = () => {
  return (
    <>
      <CertGuidelinesHeroSection />
      <CertGuidelinesContentSection />
      <FooterComponent {...CERT_GUIDELINES_FOOTER} />
    </>
  );
};

export default CertGuidelinesPage;
