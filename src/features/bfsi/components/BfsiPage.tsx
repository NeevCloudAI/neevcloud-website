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
      <FaqSection items={BFSI_FAQ_ITEMS} />
      <FooterComponent {...BFSI_FOOTER} />
    </>
  );
};

export default BfsiPage;
