import HeroSection from "@/shared/components/HeroSection";
import { MEDIA_HERO } from "../data/media-page.data";
import { Text } from "@/shared/ui-lib";

const MediaHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-5xl mt-4 md:mt-6">
          GPU Cloud Built for
          <Text as="span" variant="h1" textColor="primary">
            Media & VFX
          </Text>
        </Text>
      }
      description={MEDIA_HERO.description}
      button1Text={MEDIA_HERO.button1Text}
      button2Text={MEDIA_HERO.button2Text}
      badgeText={MEDIA_HERO.badgeText}
      image={MEDIA_HERO.image}
      trustBadges={[...MEDIA_HERO.trustBadges]}
    />
  );
};

export default MediaHeroSection;
