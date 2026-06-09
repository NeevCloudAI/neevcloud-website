import FooterComponent from "@/shared/components/footer";
import { CPU_PRICING_FOOTER } from "../data/cpu-pricing-page.data";
import CpuPricingHeroSection from "./CpuPricingHeroSection";
import CpuTransparentPricingSection from "./CpuTransparentPricingSection";
import CpuAiSection from "./CpuAiSection";
import CpuArchitectureSection from "./CpuArchitectureSection";
import CpuPricingDeploymentSection from "./CpuPricingDeploymentSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_PRICING_FAQ_ITEMS } from "../data/cpu-pricing-faq-section.data";

const CpuPricingPage = () => {
  return (
    <>
      <CpuPricingHeroSection />
      <CpuAiSection />
      <CpuArchitectureSection />
      <CpuTransparentPricingSection />
      <CpuPricingDeploymentSection />
      <FaqSection items={CPU_PRICING_FAQ_ITEMS} />
      <FooterComponent
        {...CPU_PRICING_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default CpuPricingPage;
