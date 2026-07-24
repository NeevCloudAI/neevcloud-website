import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { BILLING_GUIDELINES_HERO } from "../constants/billing-guidelines-page.constants";

const BillingGuidelinesHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          id="billing-guidelines-hero-heading"
          align="center"
          className="max-w-4xl mt-4 md:mt-6"
          textColor={"white"}
        >
          {BILLING_GUIDELINES_HERO.title}
        </Text>
      }
      badgeText={BILLING_GUIDELINES_HERO.badgeText}
      description={BILLING_GUIDELINES_HERO.description}
      trustBadges={[]}
      className="pb-8 md:pb-16 2xl:pb-25"
    />
  );
};

export default BillingGuidelinesHeroSection;
