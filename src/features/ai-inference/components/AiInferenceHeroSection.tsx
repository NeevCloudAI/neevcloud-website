import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { AI_INFERENCE_HERO } from "../data/ai-inference-page.data";

const AiInferenceHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="max-w-4xl mt-4 md:mt-6"
            textColor={"white"}
          >
            Serve AI Models at
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-4xl"
            textColor={"primary"}
          >
            Production Scale
          </Text>
        </>
      }
      {...AI_INFERENCE_HERO}
    />
  );
};

export default AiInferenceHeroSection;
