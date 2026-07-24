import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { SERVICE_LEVEL_AGREEMENT_HERO } from "../constants/service-level-agreement-page.constants";

const ServiceLevelAgreementHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          id="service-level-agreement-hero-heading"
          align="center"
          className="max-w-4xl mt-4 md:mt-6"
          textColor={"white"}
        >
          {SERVICE_LEVEL_AGREEMENT_HERO.title}
        </Text>
      }
      badgeText={SERVICE_LEVEL_AGREEMENT_HERO.badgeText}
      description={SERVICE_LEVEL_AGREEMENT_HERO.description}
      trustBadges={[]}
      className="pb-8 md:pb-16 2xl:pb-25"
    />
  );
};

export default ServiceLevelAgreementHeroSection;
