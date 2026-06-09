import HeroSection from "@/shared/components/HeroSection";
import { MODEL_API_HERO } from "../constants/model-api-page.constants";
import { Text } from "@/shared/ui-lib";

const ModelApiHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          align="center"
          textColor="primary"
          className="max-w-4xl mt-4 md:mt-6"
        >
          Production-Ready
          <Text variant="h1" as="span" textColor="black">
            AI Models Through Simple APIs
          </Text>
        </Text>
      }
      {...MODEL_API_HERO}
    />
  );
};

export default ModelApiHeroSection;
