import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { EVENTS_HERO } from "../constants/events-page.constants";

const EventsHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="max-w-4xl mt-4 md:mt-6"
            textColor={"white"}
          >
            Where AI Infrastructure
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-4xl"
            textColor={"primary"}
          >
            Meets the Future
          </Text>
        </>
      }
      {...EVENTS_HERO}
    />
  );
};

export default EventsHeroSection;
