import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { GENERATIVE_AI_HERO } from "../data/generative-ai-page.data";

const GenerativeAiHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-5xl mt-4 md:mt-6">
          Power Your
          <Text as="span" variant="h1" textColor="primary">
            GenAI Products
          </Text>
          on Indian Infrastructure
        </Text>
      }
      description={GENERATIVE_AI_HERO.description}
      button1Text={GENERATIVE_AI_HERO.button1Text}
      button2Text={GENERATIVE_AI_HERO.button2Text}
      badgeText={GENERATIVE_AI_HERO.badgeText}
      image={GENERATIVE_AI_HERO.image}
      trustBadges={[...GENERATIVE_AI_HERO.trustBadges]}
    />
  );
};

export default GenerativeAiHeroSection;
