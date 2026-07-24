import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { LIFE_AT_NEEVCLOUD_HERO } from "../data/life-at-neevcloud-page.data";

const LifeAtNeevcloudHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          align="center"
          className="max-w-5xl mt-4 md:mt-6"
          textColor={"white"}
        >
          Where Innovation Meets
          <Text as="span" variant="h1" textColor="primary">
            People
          </Text>
        </Text>
      }
      {...LIFE_AT_NEEVCLOUD_HERO}
    />
  );
};

export default LifeAtNeevcloudHeroSection;
