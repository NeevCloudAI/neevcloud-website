import FooterComponent from "@/shared/components/footer";
import FaqSection from "@/shared/components/faq/faq-section";
import { GPU_PRICING_FAQ_ITEMS } from "../data/gpu-pricing-faq-section.data";
import { GPU_PRICING_FOOTER } from "../data/gpu-pricing-page.data";
import GpuPricingHeroSection from "./GpuPricingHeroSection";
import GpuAiSection from "./GpuAiSection";
import GpuCostCalculatorSection from "./GpuCostCalculatorSection";
import GpuModelTransparentPricingSection from "./GpuModelTransparentPricingSection";
import GpuStoragePricingSection from "./GpuStoragePricingSection";
import GpuTransparentPricingSection from "./GpuTransparentPricingSection";
import GpuDeploymentComparisonSection from "./GpuDeploymentComparisonSection";

const GpuPricingPage = () => {
  return (
    <>
      <GpuPricingHeroSection />
      <GpuAiSection />
      <GpuModelTransparentPricingSection />
      <GpuStoragePricingSection />
      <GpuTransparentPricingSection />
      <GpuDeploymentComparisonSection />
      <GpuCostCalculatorSection />
      <FaqSection items={GPU_PRICING_FAQ_ITEMS} />
      <FooterComponent
        {...GPU_PRICING_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default GpuPricingPage;
