import AnnouncementSection from "@/shared/components/AnnouncementSection";
import FooterComponent from "@/shared/components/footer";
import FaqSection from "@/shared/components/faq/faq-section";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import { GPU_PRICING_FAQ } from "../data/gpu-pricing-faq-section.data";
import { GPU_PRICING_FOOTER } from "../data/gpu-pricing-page.data";
import GpuPricingHeroSection from "./GpuPricingHeroSection";
import GpuAiSection from "./GpuAiSection";
import GpuCostCalculatorSection from "./GpuCostCalculatorSection";
import GpuTransparentPricingSection from "./GpuTransparentPricingSection";

const GpuPricingPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <GpuPricingHeroSection />
      <GpuAiSection />
      <GpuCostCalculatorSection />
      <GpuTransparentPricingSection />
      <FaqSection items={GPU_PRICING_FAQ} />
      <FooterComponent
        title={GPU_PRICING_FOOTER.title}
        description={GPU_PRICING_FOOTER.description}
        button1Text={GPU_PRICING_FOOTER.button1Text}
        button2Text={GPU_PRICING_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default GpuPricingPage;
