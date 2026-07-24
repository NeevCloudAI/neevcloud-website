import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { MODEL_PLAYGROUND_HERO } from "../constants/model-playground-page.constants";

const ModelPlaygroundHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="max-w-2xl mt-4"
            textColor="primary"
          >
            Experience
            <Text variant="h1" as="span" textColor="white">
              AI Models
            </Text>
          </Text>
          <Text as="h1" align="center" className="max-w-2xl" textColor="white">
            Before You Deploy
          </Text>
        </>
      }
      {...MODEL_PLAYGROUND_HERO}
    />
  );
};

export default ModelPlaygroundHeroSection;
