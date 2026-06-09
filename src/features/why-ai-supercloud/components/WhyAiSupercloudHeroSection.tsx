import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { WHY_AI_SUPERCLOUD_HERO } from "../data/why-ai-supercloud-page.data";

const WhyAiSupercloudHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="mt-4 max-w-2xl md:mt-6">
          Why AI Needs a
          <Text as="span" variant="h1" textColor="primary">
            Different Cloud
          </Text>
        </Text>
      }
      image={WHY_AI_SUPERCLOUD_HERO.image}
      description={WHY_AI_SUPERCLOUD_HERO.description}
      primaryCta={WHY_AI_SUPERCLOUD_HERO.primaryCta}
      secondaryCta={WHY_AI_SUPERCLOUD_HERO.secondaryCta}
      badgeText={WHY_AI_SUPERCLOUD_HERO.badgeText}
      trustBadges={[...WHY_AI_SUPERCLOUD_HERO.trustBadges]}
    />
  );
};

export default WhyAiSupercloudHeroSection;
