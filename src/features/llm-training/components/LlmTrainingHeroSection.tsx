import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { LLM_TRAINING_HERO } from "../data/llm-training-page.data";

const LlmTrainingHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          align="center"
          className="max-w-5xl mt-4 md:mt-6"
          textColor={"white"}
        >
          Fine-Tune LLMs at Scale, in India
        </Text>
      }
      {...LLM_TRAINING_HERO}
    />
  );
};

export default LlmTrainingHeroSection;
