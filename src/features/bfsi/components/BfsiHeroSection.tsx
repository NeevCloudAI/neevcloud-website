import HeroSection from "@/shared/components/HeroSection";
import { BFSI_HERO } from "@/features/bfsi/constants/bfsi-page.constants";
import { Text } from "@/shared/ui-lib";

const BfsiHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-5xl mt-4 md:mt-6">
          AI Infrastructure Built for
          <Text as="span" variant="h1" textColor="primary">
            Financial Services
          </Text>
        </Text>
      }
      description={BFSI_HERO.description}
      button1Text={BFSI_HERO.button1Text}
      button2Text={BFSI_HERO.button2Text}
      badgeText={BFSI_HERO.badgeText}
      image={BFSI_HERO.image}
      trustBadges={[...BFSI_HERO.trustBadges]}
    />
  );
};

export default BfsiHeroSection;
