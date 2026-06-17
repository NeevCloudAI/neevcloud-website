import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { NEWSROOM_HERO } from "../constants/newsroom-page.constants";

const NewsroomHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-6xl mt-4 md:mt-6">
          NeevCloud in the
          <Text as="span" variant="h1" textColor="primary">
            Media
          </Text>
        </Text>
      }
      {...NEWSROOM_HERO}
    />
  );
};

export default NewsroomHeroSection;
