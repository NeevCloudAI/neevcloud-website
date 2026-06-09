import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { LLM_TRAINING_HERO } from "../data/llm-training-page.data";

const LlmTrainingHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-4xl mt-4 md:mt-6">
          Fine-Tune LLMs at Scale, in India
        </Text>
      }
      description={LLM_TRAINING_HERO.description}
      primaryCta={LLM_TRAINING_HERO.primaryCta}
      secondaryCta={LLM_TRAINING_HERO.secondaryCta}
      badgeText={LLM_TRAINING_HERO.badgeText}
      image={LLM_TRAINING_HERO.image}
      trustBadges={[...LLM_TRAINING_HERO.trustBadges]}
    />
  );
};

export default LlmTrainingHeroSection;
