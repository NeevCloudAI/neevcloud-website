import HeroSection from "@/shared/components/HeroSection";
import { MODEL_API_HERO } from "@/features/model-api/constants/model-api-page.constants";
import { Text } from "@/shared/ui-lib";

const ModelApiHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          align="center"
          textColor="primary"
          className="max-w-4xl mt-4 md:mt-6"
        >
          Production-Ready
          <Text variant="h1" as="span" textColor="black">
            AI Models Through Simple APIs
          </Text>
        </Text>
      }
      description={MODEL_API_HERO.description}
      button1Text={MODEL_API_HERO.button1Text}
      button2Text={MODEL_API_HERO.button2Text}
      badgeText={MODEL_API_HERO.badgeText}
      image={MODEL_API_HERO.image}
      trustBadges={[...MODEL_API_HERO.trustBadges]}
    />
  );
};

export default ModelApiHeroSection;
