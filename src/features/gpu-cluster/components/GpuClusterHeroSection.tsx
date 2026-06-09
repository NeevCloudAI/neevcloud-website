import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { GPU_CLUSTER_HERO } from "../constants/gpu-cluster-page.constants";

const GpuClusterHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" className="mt-4 md:mt-5 max-w-4xl text-center">
          The Right GPU for Every
          <Text as="span" variant="h1" textColor="primary">
            AI Workload
          </Text>
        </Text>
      }
      description={GPU_CLUSTER_HERO.description}
      primaryCta={GPU_CLUSTER_HERO.primaryCta}
      secondaryCta={GPU_CLUSTER_HERO.secondaryCta}
      badgeText={GPU_CLUSTER_HERO.badgeText}
      image={GPU_CLUSTER_HERO.image}
    />
  );
};

export default GpuClusterHeroSection;
