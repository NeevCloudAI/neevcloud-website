import { Text } from "@/shared/ui-lib";
import { TRUST_CENTER_HERO } from "../data/trust-center-page.data";
import HeroSection from "@/shared/components/HeroSection";

const TrustCenterHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="mt-4 max-w-4xl md:mt-6"
            textColor="white"
          >
            Built on a Foundation of
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-4xl"
            textColor={"primary"}
          >
            Security and Trust
          </Text>
        </>
      }
      {...TRUST_CENTER_HERO}
    />
  );
};

export default TrustCenterHeroSection;
