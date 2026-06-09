import HeroSection from "@/shared/components/HeroSection";
import { BFSI_HERO } from "../data/bfsi-page.data";
import { Text } from "@/shared/ui-lib";

const BfsiHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-4xl mt-4 md:mt-6">
          AI Infrastructure Built for
          <Text as="span" variant="h1" textColor="primary">
            Financial Services
          </Text>
        </Text>
      }
      {...BFSI_HERO}
    />
  );
};

export default BfsiHeroSection;
