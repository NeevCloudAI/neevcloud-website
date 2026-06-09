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
      {...PUBLIC_SECTOR_HERO}
    />
  );
};

export default PublicSectorHeroSection;
