import HeroSection from "@/shared/components/HeroSection";
import { BFSI_HERO } from "../data/bfsi-page.data";
import { Text } from "@/shared/ui-lib";

const BfsiHeroSection = () => {
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
            AI Infrastructure Built for
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-5xl"
            textColor={"primary"}
          >
            Financial Services
          </Text>
        </>
      }
      {...BFSI_HERO}
    />
  );
};

export default BfsiHeroSection;
