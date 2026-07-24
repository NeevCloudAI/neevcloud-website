import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { ACCEPTABLE_USER_POLICY_HERO } from "../constants/acceptable-user-policy-page.constants";

const AcceptableUserPolicyHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          id="acceptable-user-policy-hero-heading"
          align="center"
          className="max-w-4xl mt-4 md:mt-6"
          textColor={"white"}
        >
          {ACCEPTABLE_USER_POLICY_HERO.title}
        </Text>
      }
      badgeText={ACCEPTABLE_USER_POLICY_HERO.badgeText}
      description={ACCEPTABLE_USER_POLICY_HERO.description}
      trustBadges={[]}
      className="pb-8 md:pb-16 2xl:pb-25"
    />
  );
};

export default AcceptableUserPolicyHeroSection;
