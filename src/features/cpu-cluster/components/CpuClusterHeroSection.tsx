import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { CPU_CLUSTER_HERO } from "@/features/cpu-cluster/constants/cpu-cluster-page.constants";

const CpuClusterHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" className="max-w-7xl text-center mt-4 md:mt-6 ">
          The
          <Text as="span" variant="h1" textColor="primary">
            Control Plane
          </Text>
          for your GPU Cluster. Everything That Runs Around It.
        </Text>
      }
      description={CPU_CLUSTER_HERO.description}
      button1Text={CPU_CLUSTER_HERO.button1Text}
      button2Text={CPU_CLUSTER_HERO.button2Text}
      badgeText={CPU_CLUSTER_HERO.badgeText}
      image={CPU_CLUSTER_HERO.image}
    />
  );
};

export default CpuClusterHeroSection;
