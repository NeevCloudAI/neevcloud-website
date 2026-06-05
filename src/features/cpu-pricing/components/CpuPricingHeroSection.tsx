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
      description={CPU_PRICING_HERO.description}
      button1Text={CPU_PRICING_HERO.button1Text}
      button2Text={CPU_PRICING_HERO.button2Text}
      badgeText={CPU_PRICING_HERO.badgeText}
      trustBadges={[...CPU_PRICING_HERO.trustBadges]}
    />
  );
};

export default CpuPricingHeroSection;
