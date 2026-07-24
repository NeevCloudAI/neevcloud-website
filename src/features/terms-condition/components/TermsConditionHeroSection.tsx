import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { TERMS_CONDITION_HERO } from "../constants/terms-condition-page.constants";

const TermsConditionHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          id="terms-condition-hero-heading"
          align="center"
          className="max-w-4xl mt-4 md:mt-6"
          textColor={"white"}
        >
          {TERMS_CONDITION_HERO.title}
        </Text>
      }
      badgeText={TERMS_CONDITION_HERO.badgeText}
      description={TERMS_CONDITION_HERO.description}
      trustBadges={[]}
      className="pb-8 md:pb-16 2xl:pb-25"
    />
  );
};

export default TermsConditionHeroSection;
