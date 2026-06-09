import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { CERT_GUIDELINES_HERO } from "../constants/cert-guidelines-page.constants";

const CertGuidelinesHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          id="cert-guidelines-hero-heading"
          align="center"
          className="max-w-4xl mt-4 md:mt-6"
        >
          {CERT_GUIDELINES_HERO.title}
        </Text>
      }
      badgeText={CERT_GUIDELINES_HERO.badgeText}
      description={CERT_GUIDELINES_HERO.description}
      trustBadges={[]}
      className="pb-8 md:pb-16 2xl:pb-25"
    />
  );
};

export default CertGuidelinesHeroSection;
