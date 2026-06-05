import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { CAREERS_HERO } from "../data/careers-page.data";

const CareersHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-5xl mt-4 md:mt-6">
          AI That
          <Text as="span" variant="h1" textColor="primary">
            Empowers All
          </Text>
        </Text>
      }
      description={CAREERS_HERO.description}
      button1Text={CAREERS_HERO.button1Text}
      button2Text={CAREERS_HERO.button2Text}
      badgeText={CAREERS_HERO.badgeText}
      trustBadges={[...CAREERS_HERO.trustBadges]}
      image="/images/career.png"
    />
  );
};

export default CareersHeroSection;
