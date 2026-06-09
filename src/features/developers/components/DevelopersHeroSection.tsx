import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { DEVELOPERS_HERO } from "../constants/developers-page.constants";

const DevelopersHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-4xl mt-4 md:mt-6">
          Everything You Need to
          <Text as="span" variant="h1" textColor="primary">
            Build and Scale AI
          </Text>
        </Text>
      }
      {...DEVELOPERS_HERO}
    />
  );
};

export default DevelopersHeroSection;
