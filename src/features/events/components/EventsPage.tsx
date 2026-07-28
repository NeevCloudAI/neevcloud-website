import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import EventsHeroSection from "./EventsHeroSection";
import EventsGridSection from "./EventsGridSection";
import EventsLatestHighlightSection from "./EventsLatestHighlightSection";
import { EVENTS_FAQ_ITEMS } from "../data/faq-section-data";
import { EVENTS_FOOTER } from "../constants/events-page.constants";

const EventsPage = () => {
  return (
    <>
      <EventsHeroSection />
      <EventsLatestHighlightSection />
      <EventsGridSection />
      <FaqSection items={EVENTS_FAQ_ITEMS} />
      <FooterComponent {...EVENTS_FOOTER} />
    </>
  );
};

export default EventsPage;
