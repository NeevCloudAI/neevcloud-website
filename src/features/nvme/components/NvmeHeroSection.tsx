import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { NVME_HERO } from "../constants/nvme-page.constants";

const NvmeHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          align="center"
          textColor="primary"
          className="max-w-4xl mt-4 md:mt-6"
        >
          NVMe Storage
          <Text variant="h1" as="span" textColor="black">
            Built for AI Workloads
          </Text>
        </Text>
      }
      description={NVME_HERO.description}
      button1Text={NVME_HERO.button1Text}
      button2Text={NVME_HERO.button2Text}
      badgeText={NVME_HERO.badgeText}
      image={NVME_HERO.image}
      trustBadges={[...NVME_HERO.trustBadges]}
    />
  );
};

export default NvmeHeroSection;
