import HeroSection from "@/shared/components/HeroSection";
import { PUBLIC_SECTOR_HERO } from "../constants/public-sector-page.constants";
import { Text } from "@/shared/ui-lib";

const PublicSectorHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="max-w-5xl mt-4 md:mt-6"
            textColor={"white"}
          >
            Indigenous AI Infrastructure for
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-5xl"
            textColor={"primary"}
          >
            National Priorities
          </Text>
        </>
      }
      {...PUBLIC_SECTOR_HERO}
    />
  );
};

export default PublicSectorHeroSection;
