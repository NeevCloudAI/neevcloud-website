import Container from "@/shared/components/container";
import {
  EVENTS_GRID_FILTERS,
  EVENTS_GRID_ITEMS,
} from "../data/events-grid-section.data";
import EventsGridSectionClient from "./events-grid/EventsGridSectionClient";
import { Text } from "@/shared/ui-lib";

const EventsGridSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-label="Events listing"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="events-latest-highlight-section-heading"
          align="center"
          weight="semibold"
          className="max-w-4xl"
        >
          ALL Events
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          Where you can find NeevCloud - summits, conferences, workshops, and
          community sessions.
        </Text>
        <EventsGridSectionClient
          events={EVENTS_GRID_ITEMS}
          filters={EVENTS_GRID_FILTERS}
        />
      </Container>
    </section>
  );
};

export default EventsGridSection;
