import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { MODEL_PLAYGROUND_HERO } from "../data/model-playground-page.constants";

const VisitPlatformHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text align="center" className="max-w-4xl mt-4">
          <Text as="h1" textColor="black">
            Your AI Infrastructure,
          </Text>
          <Text variant="h1" as="span" textColor="primary">
            One Platform
          </Text>
        </Text>
      }
      description={MODEL_PLAYGROUND_HERO.description}
      button1Text={MODEL_PLAYGROUND_HERO.button1Text}
      button2Text={MODEL_PLAYGROUND_HERO.button2Text}
      badgeText={MODEL_PLAYGROUND_HERO.badgeText}
      image={MODEL_PLAYGROUND_HERO.image}
      trustBadges={[...MODEL_PLAYGROUND_HERO.trustBadges]}
    />
  );
};

export default VisitPlatformHeroSection;
