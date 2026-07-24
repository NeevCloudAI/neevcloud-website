import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { GPU_CLUSTER_HERO } from "../constants/gpu-cluster-page.constants";

const GpuClusterHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            className="mt-4 md:mt-5 max-w-4xl text-center"
            textColor={"white"}
          >
            The Right GPU for Every
          </Text>
          <Text as="h1" className="max-w-4xl text-center" textColor={"primary"}>
            AI Workload
          </Text>
        </>
      }
      {...GPU_CLUSTER_HERO}
    />
  );
};

export default GpuClusterHeroSection;
