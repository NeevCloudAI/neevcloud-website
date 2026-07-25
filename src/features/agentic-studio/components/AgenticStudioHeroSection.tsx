import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { AGENTIC_STUDIO_HERO } from "../constants/agentic-studio-page.constants";

const AgenticStudioHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            className="max-w-4xl text-center mt-4 md:mt-6"
            textColor="white"
          >
            Secure Sandboxes for
            <Text as="span" variant="h1" textColor="primary" weight="semibold">
              AI Agents & Code Execution
            </Text>
          </Text>
        </>
      }
      {...AGENTIC_STUDIO_HERO}
    />
  );
};

export default AgenticStudioHeroSection;
