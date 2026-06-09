import HeroSection from "@/shared/components/HeroSection";
import { HEALTHCARE_HERO } from "../data/healthcare-page.data";
import { Text } from "@/shared/ui-lib";

const HealthcareHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-5xl mt-4 md:mt-6">
          AI Infrastructure for
          <Text as="span" variant="h1" textColor="primary">
            Healthcare & Medical Research
          </Text>
        </Text>
      }
      description={HEALTHCARE_HERO.description}
      primaryCta={HEALTHCARE_HERO.primaryCta}
      secondaryCta={HEALTHCARE_HERO.secondaryCta}
      badgeText={HEALTHCARE_HERO.badgeText}
      image={HEALTHCARE_HERO.image}
      trustBadges={[...HEALTHCARE_HERO.trustBadges]}
    />
  );
};

export default HealthcareHeroSection;
