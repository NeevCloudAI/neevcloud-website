import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { EVENTS_HERO } from "../constants/events-page.constants";

const EventsHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-6xl mt-4 md:mt-6">
          Where AI Infrastructure
          <Text as="span" variant="h1" textColor="primary">
            Meets the Future
          </Text>
        </Text>
      }
      {...EVENTS_HERO}
    />
  );
};

export default EventsHeroSection;
