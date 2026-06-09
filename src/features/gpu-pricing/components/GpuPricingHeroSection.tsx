import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { GPU_PRICING_HERO } from "../data/gpu-pricing-page.data";

const GpuPricingHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="mt-4 max-w-4xl md:mt-6">
          GPU Compute Designed for AI,
          <Text variant="h1" as="span" textColor="primary">
            Not Just Adapted for It
          </Text>
        </Text>
      }
      {...GPU_PRICING_HERO}
    />
  );
};

export default GpuPricingHeroSection;
