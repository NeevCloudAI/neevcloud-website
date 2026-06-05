import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HealthcareHeroSection from "./HealthcareHeroSection";
import HealthcareAmbitionSection from "./HealthcareAmbitionSection";
import HealthcareApplicationSection from "./HealthcareApplicationSection";
import { HEALTHCARE_FAQ_ITEMS } from "../data/faq-section.data";
import { HEALTHCARE_FOOTER } from "../data/healthcare-page.data";
import HealthcarePerformanceSection from "./HealthcarePerformanceSection";

const HealthcarePage = () => {
  return (
    <>
      <HealthcareHeroSection />
      <HealthcareAmbitionSection />
      <HealthcareApplicationSection />
      <HealthcarePerformanceSection />
      <FaqSection
        items={HEALTHCARE_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={HEALTHCARE_FOOTER.title}
        description={HEALTHCARE_FOOTER.description}
        button1Text={HEALTHCARE_FOOTER.button1Text}
        button2Text={HEALTHCARE_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default HealthcarePage;
