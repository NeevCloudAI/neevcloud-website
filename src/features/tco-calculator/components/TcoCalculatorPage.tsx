import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import { TCO_CALCULATOR_FAQ_ITEMS } from "../data/tco-calculator-faq-section.data";
import { TCO_CALCULATOR_FOOTER } from "../data/tco-calculator-page.data";
import ProviderComparisonSection from "./ProviderComparisonSection";
import TcoCalculatorCapabilitiesSection from "./TcoCalculatorCapabilitiesSection";
import TcoCalculatorConfigSection from "./TcoCalculatorConfigSection";
import TcoCalculatorHeroSection from "./TcoCalculatorHeroSection";

const TcoCalculatorPage = () => {
  return (
    <>
      <TcoCalculatorHeroSection />
      <TcoCalculatorCapabilitiesSection />
      <TcoCalculatorConfigSection />
      <ProviderComparisonSection />
      <FaqSection
        items={TCO_CALCULATOR_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        {...TCO_CALCULATOR_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default TcoCalculatorPage;
