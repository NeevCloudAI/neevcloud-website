import HeroSection from "@/shared/components/HeroSection";
import { HEALTHCARE_HERO } from "../data/healthcare-page.data";
import { Text } from "@/shared/ui-lib";

const HealthcareHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="max-w-5xl mt-4 md:mt-6"
            textColor={"white"}
          >
            AI Infrastructure for
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-5xl"
            textColor={"primary"}
          >
            Healthcare & Medical Research
          </Text>
        </>
      }
      {...HEALTHCARE_HERO}
    />
  );
};

export default HealthcareHeroSection;
