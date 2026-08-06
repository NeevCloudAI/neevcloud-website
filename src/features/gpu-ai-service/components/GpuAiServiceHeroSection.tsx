import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { GPU_AI_SERVICE_HERO } from "../constants/gpu-ai-service-page.constants";

const GpuAiServiceHeroSection = () => {
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
      {...GPU_AI_SERVICE_HERO}
    />
  );
};

export default GpuAiServiceHeroSection;
