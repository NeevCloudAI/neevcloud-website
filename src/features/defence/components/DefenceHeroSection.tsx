import HeroSection from "@/shared/components/HeroSection";
import { DEFENCE_HERO } from "../data/defence-page.data";
import { Text } from "@/shared/ui-lib";

const DefenceHeroSection = () => {
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
            Sovereign AI Infrastructure for
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-5xl"
            textColor={"primary"}
          >
            Strategic Applications
          </Text>
        </>
      }
      {...DEFENCE_HERO}
    />
  );
};

export default DefenceHeroSection;
