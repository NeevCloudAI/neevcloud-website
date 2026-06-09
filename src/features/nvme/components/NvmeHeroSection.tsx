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
      {...NVME_HERO}
    />
  );
};

export default NvmeHeroSection;
