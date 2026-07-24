import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { CPU_PRICING_HERO } from "../data/cpu-pricing-page.data";

const CpuPricingHeroSection = () => {
  return (
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
          <Text
            as="h1"
            align="center"
            className="max-w-4xl"
            textColor={"primary"}
          >
            Innovate Without Waiting
          </Text>
        </>
      }
      {...CPU_PRICING_HERO}
    />
  );
};

export default CpuPricingHeroSection;
