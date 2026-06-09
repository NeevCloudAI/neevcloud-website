import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { AI_INFERENCE_HERO } from "../data/ai-inference-page.data";

const AiInferenceHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="mt-4 max-w-6xl md:mt-6">
          Serve AI Models at
          <Text as="span" variant="h1" textColor="primary">
            Production Scale
          </Text>
        </Text>
      }
      {...AI_INFERENCE_HERO}
    />
  );
};

export default AiInferenceHeroSection;
