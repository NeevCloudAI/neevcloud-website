import { Text } from "@/shared/ui-lib";
import { TRUST_CENTER_HERO } from "../data/trust-center-page.data";
import HeroSection from "@/shared/components/HeroSection";

const TrustCenterHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="mt-4 max-w-4xl md:mt-6">
          Built on a Foundation of
          <Text variant="h1" as="span" textColor="primary">
            Security and Trust
          </Text>
        </Text>
      }
      image={TRUST_CENTER_HERO.dashboardImage}
      description={TRUST_CENTER_HERO.description}
      button1Text={TRUST_CENTER_HERO.button1Text}
      button2Text={TRUST_CENTER_HERO.button2Text}
      badgeText={TRUST_CENTER_HERO.badgeText}
      trustBadges={[...TRUST_CENTER_HERO.trustBadges]}
    />
  );
};

export default TrustCenterHeroSection;
