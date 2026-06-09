import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { CPU_PRICING_HERO } from "../data/cpu-pricing-page.data";

const CpuPricingHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="mt-4 max-w-5xl md:mt-6">
          Compute Without Limits,
          <Text variant="h1" as="span" textColor="primary">
            Innovate Without Waiting
          </Text>
        </Text>
      }
      {...CPU_PRICING_HERO}
    />
  );
};

export default CpuPricingHeroSection;
