import HeroSection from "@/shared/components/HeroSection";
import { MEDIA_HERO } from "../data/media-page.data";
import { Text } from "@/shared/ui-lib";

const MediaHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-2xl mt-4 md:mt-6">
          GPU Cloud Built for
          <Text as="span" variant="h1" textColor="primary">
            Media & VFX
          </Text>
        </Text>
      }
      {...MEDIA_HERO}
    />
  );
};

export default MediaHeroSection;
