import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { MODEL_PLAYGROUND_HERO } from "@/features/model-playground/constants/model-playground-page.constants";

const ModelPlaygroundHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          align="center"
          className="max-w-4xl mt-4"
          textColor="primary"
        >
          Experience
          <Text variant="h1" as="span" textColor="black">
            AI Models Before You Deploy
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

export default ModelPlaygroundHeroSection;
