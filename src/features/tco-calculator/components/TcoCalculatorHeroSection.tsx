import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { TCO_CALCULATOR_HERO } from "../data/tco-calculator-page.data";

const TcoCalculatorHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="mt-4 max-w-4xl md:mt-6">
          Know Your
          <Text as="span" variant="h1" textColor="primary">
            GPU Cloud Cost
          </Text>
          Before You Commit
        </Text>
      }
      {...TCO_CALCULATOR_HERO}
    />
  );
};

export default TcoCalculatorHeroSection;
