import AnnouncementSection from "@/shared/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import HealthcareHeroSection from "./HealthcareHeroSection";
import HealthcareAmbitionSection from "./HealthcareAmbitionSection";
import HealthcareApplicationSection from "./HealthcareApplicationSection";
import { HEALTHCARE_FAQ_ITEMS } from "../data/faq-section.data";
import { HEALTHCARE_FOOTER } from "../data/healthcare-page.data";

const HealthcarePage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <HealthcareHeroSection />
      <HealthcareAmbitionSection />
      <HealthcareApplicationSection />
      <FaqSection items={HEALTHCARE_FAQ_ITEMS} />
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
