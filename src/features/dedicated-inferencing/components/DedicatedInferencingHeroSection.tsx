import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { DEDICATED_INFERENCING_HERO } from "../constants/dedicated-inferencing-page.constants";

const DedicatedInferencingHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            className="max-w-5xl text-center mt-4 md:mt-6"
            textColor="white"
          >
            Reserved GPU Power for
          </Text>
          <Text as="h1" className="max-w-5xl text-center" textColor="white">
            Your Models
            <Text as="span" variant="h1" textColor="primary" weight="semibold">
              Always On
            </Text>
          </Text>
        </>
      }
      {...DEDICATED_INFERENCING_HERO}
    />
  );
};

export default DedicatedInferencingHeroSection;
