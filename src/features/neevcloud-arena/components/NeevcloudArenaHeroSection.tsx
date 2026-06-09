import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { NEEVCLOUD_ARENA_HERO } from "../data/neevcloud-arena-page.data";

const NeevcloudArenaHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="mt-4 max-w-5xl md:mt-6">
          Experience AI Infrastructure Before
          <Text variant="h1" as="span" textColor="primary">
            You Commit
          </Text>
        </Text>
      }
      image={NEEVCLOUD_ARENA_HERO.image}
      description={NEEVCLOUD_ARENA_HERO.description}
      primaryCta={NEEVCLOUD_ARENA_HERO.primaryCta}
      secondaryCta={NEEVCLOUD_ARENA_HERO.secondaryCta}
      badgeText={NEEVCLOUD_ARENA_HERO.badgeText}
      trustBadges={[...NEEVCLOUD_ARENA_HERO.trustBadges]}
    />
  );
};

export default NeevcloudArenaHeroSection;
