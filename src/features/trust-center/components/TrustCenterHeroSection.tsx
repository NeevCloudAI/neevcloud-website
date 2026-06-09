import { Text } from "@/shared/ui-lib";
import { TRUST_CENTER_HERO } from "../data/trust-center-page.data";
import HeroSection from "@/shared/components/HeroSection";

const TrustCenterHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="mt-4 max-w-4xl md:mt-6">
          Built on a Foundation of
          <Text variant="h1" as="span" textColor="primary">
            Security and Trust
          </Text>
        </Text>
      }
      {...TRUST_CENTER_HERO}
    />
  );
};

export default TrustCenterHeroSection;
