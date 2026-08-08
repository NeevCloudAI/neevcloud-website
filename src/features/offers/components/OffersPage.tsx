import HeroSection from "@/shared/components/HeroSection";
import FooterComponent from "@/shared/components/footer";
import FaqSection from "@/shared/components/faq/faq-section";
import { Text } from "@/shared/ui-lib";
import CpuAiSection from "@/features/cpu-pricing/components/CpuAiSection";
import CpuArchitectureSection from "@/features/cpu-pricing/components/CpuArchitectureSection";
import CpuTransparentPricingSection from "@/features/cpu-pricing/components/CpuTransparentPricingSection";
import CpuPricingDeploymentSection from "@/features/cpu-pricing/components/CpuPricingDeploymentSection";
import { CPU_PRICING_FAQ_ITEMS } from "@/features/cpu-pricing/data/cpu-pricing-faq-section.data";
import { OFFERS_HERO, OFFERS_FOOTER } from "../data/offers-page.data";

const OffersPage = () => {
  return (
    <>
      <HeroSection
        title={
          <>
            <Text
              as="h1"
              align="center"
              className="max-w-4xl mt-4 md:mt-6"
              textColor={"white"}
            >
              Compute Without Limits,
            </Text>
            <Text as="h1" align="center" className="max-w-4xl" textColor={"primary"}>
              Innovate Without Waiting
            </Text>
          </>
        }
        {...OFFERS_HERO}
      />
      <CpuAiSection />
      <CpuArchitectureSection />
      <CpuTransparentPricingSection />
      <CpuPricingDeploymentSection />
      <FaqSection items={CPU_PRICING_FAQ_ITEMS} />
      <FooterComponent {...OFFERS_FOOTER} />
    </>
  );
};

export default OffersPage;
