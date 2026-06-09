import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { CPU_CLUSTER_HERO } from "../constants/cpu-cluster-page.constants";

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
      {...CPU_CLUSTER_HERO}
    />
  );
};

export default CpuClusterHeroSection;
