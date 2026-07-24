import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { GENERATIVE_AI_HERO } from "../data/generative-ai-page.data";

const GenerativeAiHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="max-w-5xl mt-4 md:mt-6"
            textColor={"white"}
          >
            Power Your
            <Text as="span" variant="h1" textColor="primary">
              GenAI Products
            </Text>
            on
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-5xl"
            textColor={"white"}
          >
            Indian Infrastructure
          </Text>
        </>
      }
      {...GENERATIVE_AI_HERO}
    />
  );
};

export default GenerativeAiHeroSection;
