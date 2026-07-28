import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import DataJurisdictionSection from "./DataJurisdictionSection";
import EnterpriseStandardsSection from "./EnterpriseStandardsSection";
import SecurityByDesignSection from "./SecurityByDesignSection";
import TrustCenterHeroSection from "./TrustCenterHeroSection";
import TransparentOperationsSection from "./TransparentOperationsSection";
import { TRUST_CENTER_FAQ_ITEMS } from "../data/faq-section.data";
import { TRUST_CENTER_FOOTER } from "../data/trust-center-page.data";

const TrustCenterPage = () => {
  return (
    <>
      <TrustCenterHeroSection />
      <EnterpriseStandardsSection />
      <SecurityByDesignSection />
      <TransparentOperationsSection />
      <DataJurisdictionSection />
      <FaqSection
        items={TRUST_CENTER_FAQ_ITEMS}
      />
      <FooterComponent
        {...TRUST_CENTER_FOOTER}
      />
    </>
  );
};

export default TrustCenterPage;
