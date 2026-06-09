import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { MODEL_PLAYGROUND_HERO } from "../constants/model-playground-page.constants";

const ModelPlaygroundHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          align="center"
          className="max-w-2xl mt-4"
          textColor="primary"
        >
          Experience
          <Text variant="h1" as="span" textColor="black">
            AI Models Before You Deploy
          </Text>
        </Text>
      }
      description={MODEL_PLAYGROUND_HERO.description}
      primaryCta={MODEL_PLAYGROUND_HERO.primaryCta}
      secondaryCta={MODEL_PLAYGROUND_HERO.secondaryCta}
      badgeText={MODEL_PLAYGROUND_HERO.badgeText}
      image={MODEL_PLAYGROUND_HERO.image}
      trustBadges={[...MODEL_PLAYGROUND_HERO.trustBadges]}
    />
  );
};

export default ModelPlaygroundHeroSection;
