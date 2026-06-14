import FooterComponent from "@/shared/components/footer";
import ServiceLevelAgreementHeroSection from "./ServiceLevelAgreementHeroSection";
import { SERVICE_LEVEL_AGREEMENT_FOOTER } from "../constants/service-level-agreement-page.constants";
import ServiceLevelAgreementContentSection from "./ServiceLevelAgreementContentSection";

const ServiceLevelAgreementPage = () => {
  return (
    <>
      <ServiceLevelAgreementHeroSection />
      <ServiceLevelAgreementContentSection />
      <FooterComponent {...SERVICE_LEVEL_AGREEMENT_FOOTER} />
    </>
  );
};

export default ServiceLevelAgreementPage;
