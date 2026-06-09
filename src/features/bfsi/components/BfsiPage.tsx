import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import BfsiHeroSection from "./BfsiHeroSection";
import BfsiAmbitionSection from "./BfsiAmbitionSection";
import EnterpriseSection from "./EnterpriseSection";
import ApplicationSection from "./ApplicationSection";
import PerformanceSection from "./PerformanceSection";
import { BFSI_FAQ_ITEMS } from "../data/faq-section.data";
import { BFSI_FOOTER } from "../data/bfsi-page.data";

const BfsiPage = () => {
  return (
    <>
      <BfsiHeroSection />
      <BfsiAmbitionSection />
      <EnterpriseSection />
      <ApplicationSection />
      <PerformanceSection />
      <FaqSection items={BFSI_FAQ_ITEMS} className="pt-0 md:pt-0 2xl:pt-0" />
      <FooterComponent
        title={BFSI_FOOTER.title}
        description={BFSI_FOOTER.description}
        primaryCta={BFSI_FOOTER.primaryCta}
        secondaryCta={BFSI_FOOTER.secondaryCta}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default BfsiPage;
