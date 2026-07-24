import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { DEVELOPERS_HERO } from "../constants/developers-page.constants";

const DevelopersHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="max-w-4xl mt-4 md:mt-6"
            textColor={"white"}
          >
            Everything You Need to
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-4xl"
            textColor={"primary"}
          >
            Build and Scale AI
          </Text>
        </>
      }
      {...DEVELOPERS_HERO}
    />
  );
};

export default DevelopersHeroSection;
