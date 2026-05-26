import HeroSection from "@/shared/components/HeroSection";
import { PUBLIC_SECTOR_HERO } from "../constants/public-sector-page.constants";
import { Text } from "@/shared/ui-lib";

const PublicSectorHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          align="center"
          textColor="primary"
          className="max-w-5xl mt-4 md:mt-6"
        >
          Indigenous AI Infrastructure for
          <Text variant="h1" as="span" textColor="black">
            National Priorities
          </Text>
        </Text>
      }
      description={PUBLIC_SECTOR_HERO.description}
      button1Text={PUBLIC_SECTOR_HERO.button1Text}
      button2Text={PUBLIC_SECTOR_HERO.button2Text}
      badgeText={PUBLIC_SECTOR_HERO.badgeText}
      image={PUBLIC_SECTOR_HERO.image}
      trustBadges={[...PUBLIC_SECTOR_HERO.trustBadges]}
    />
  );
};

export default PublicSectorHeroSection;
