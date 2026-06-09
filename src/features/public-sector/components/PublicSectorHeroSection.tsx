import HeroSection from "@/shared/components/HeroSection";
import { PUBLIC_SECTOR_HERO } from "../constants/public-sector-page.constants";
import { Text } from "@/shared/ui-lib";

const PublicSectorHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-5xl mt-4 md:mt-6">
          Indigenous AI Infrastructure for
          <Text variant="h1" as="span" textColor="primary">
            National Priorities
          </Text>
        </Text>
      }
      description={PUBLIC_SECTOR_HERO.description}
      primaryCta={PUBLIC_SECTOR_HERO.primaryCta}
      secondaryCta={PUBLIC_SECTOR_HERO.secondaryCta}
      badgeText={PUBLIC_SECTOR_HERO.badgeText}
      image={PUBLIC_SECTOR_HERO.image}
      trustBadges={[...PUBLIC_SECTOR_HERO.trustBadges]}
    />
  );
};

export default PublicSectorHeroSection;
