import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { GPU_PRICING_HERO } from "../data/gpu-pricing-page.data";

const GpuPricingHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="max-w-6xl mt-4 md:mt-6"
            textColor={"white"}
          >
            GPU Compute Designed for AI,
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-4xl"
            textColor={"primary"}
          >
            Not Just Adapted for It
          </Text>
        </>
      }
      {...GPU_PRICING_HERO}
    />
  );
};

export default GpuPricingHeroSection;
