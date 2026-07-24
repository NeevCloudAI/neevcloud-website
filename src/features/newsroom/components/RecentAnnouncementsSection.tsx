import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  RECENT_ANNOUNCEMENTS_ITEMS,
  RECENT_ANNOUNCEMENTS_SECTION,
} from "../data/recent-announcements-section.data";
import AnnouncementCard from "./recent-announcements/AnnouncementCard";

const RecentAnnouncementsSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="recent-announcements-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="recent-announcements-section-heading"
          align="center"
          className="max-w-4xl mb-4 md:mb-10"
        >
          {RECENT_ANNOUNCEMENTS_SECTION.title}
        </Text>

        <ul className="grid w-full list-none grid-cols-1 gap-4 md:gap-5 p-0 md:grid-cols-2">
          {RECENT_ANNOUNCEMENTS_ITEMS.map((announcement) => (
            <li key={announcement.id}>
              <AnnouncementCard announcement={announcement} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default RecentAnnouncementsSection;
