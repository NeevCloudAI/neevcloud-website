import HeroSection from "@/shared/components/HeroSection";
import { MODEL_API_HERO } from "../constants/model-api-page.constants";
import { Text } from "@/shared/ui-lib";

const ModelApiHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            textColor="primary"
            className="max-w-4xl mt-4 md:mt-6"
          >
            Production-Ready
            <Text variant="h1" as="span" textColor="white">
              AI Models
            </Text>
          </Text>
          <Text as="h1" align="center" textColor="white" className="max-w-4xl">
            Through Simple APIs
          </Text>
        </>
      }
      {...MODEL_API_HERO}
    />
  );
};

export default ModelApiHeroSection;
