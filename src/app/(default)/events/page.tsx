import type { Metadata } from "next";
import { EventsComponent } from "@/features/events";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Events | NeevCloud",
  description:
    "From global summits to exclusive experiences, connect with the minds shaping the future of AI infrastructure at NeevCloud events.",
  openGraph: {
    title: "Events | NeevCloud",
    description:
      "Join NeevCloud at AI, cloud, and developer conferences. Meet our team, attend workshops, and stay connected through our community.",
  },
};

const EventsPage = () => {
  return <EventsComponent />;
};

export default EventsPage;
