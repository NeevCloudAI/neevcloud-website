import { EventsComponent } from "@/features/events";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/events",
  title: "Events - AI & Cloud | NeevCloud",
  description:
    "Join NeevCloud at events shaping the future of AI infrastructure. Learn AI infrastructure, connect with builders, meet our team.",
});

const EventsPage = () => {
  return <EventsComponent />;
};

export default EventsPage;
