import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { AI_TEMPLATES_HERO } from "../constants/ai-templates-page.constants";

const AiTemplatesHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            className="max-w-5xl text-center mt-4 md:mt-6"
            textColor="white"
          >
            One-Click AI Environments
          </Text>
          <Text as="h1" className="max-w-5xl text-center" textColor="white">
            <Text as="span" variant="h1" textColor="primary" weight="semibold">
              Skip Setup, Start Building
            </Text>
          </Text>
        </>
      }
      {...AI_TEMPLATES_HERO}
    />
  );
};

export default AiTemplatesHeroSection;
