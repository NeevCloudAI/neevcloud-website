import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { PRIVACY_POLICY_HERO } from "../constants/privacy-policy-page.constants";

const PrivacyPolicyHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          id="privacy-policy-hero-heading"
          align="center"
          className="max-w-4xl mt-4 md:mt-6"
        >
          {PRIVACY_POLICY_HERO.title}
        </Text>
      }
      badgeText={PRIVACY_POLICY_HERO.badgeText}
      description={PRIVACY_POLICY_HERO.description}
      trustBadges={[]}
      className="pb-8 md:pb-16 2xl:pb-25"
    />
  );
};

export default PrivacyPolicyHeroSection;
