import HeroSection from "@/shared/components/HeroSection";
import { MEDIA_HERO } from "../data/media-page.data";
import { Text } from "@/shared/ui-lib";

const MediaHeroSection = () => {
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
            GPU Cloud Built for
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-5xl"
            textColor={"primary"}
          >
            Media & VFX
          </Text>
        </>
      }
      {...MEDIA_HERO}
    />
  );
};

export default MediaHeroSection;
