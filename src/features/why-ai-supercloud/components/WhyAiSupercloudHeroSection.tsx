import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { WHY_AI_SUPERCLOUD_HERO } from "../data/why-ai-supercloud-page.data";

const WhyAiSupercloudHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="mt-4 max-w-5xl md:mt-6"
            textColor="white"
          >
            Why AI Needs a
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-5xl"
            textColor="primary"
          >
            Different Cloud
          </Text>
        </>
      }
      {...WHY_AI_SUPERCLOUD_HERO}
    />
  );
};

export default WhyAiSupercloudHeroSection;
