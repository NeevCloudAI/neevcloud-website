import {
  ArrowRight,
  Calendar,
  MapPinned,
} from "@/shared/icons/lucide-icon-map";
import { Divider, Text } from "@/shared/ui-lib";
import LinkComponent from "@/shared/ui-lib/link";
import { cn } from "@/lib/utils";
import type { EventCardItem } from "../../types/events-grid-section.types";

type EventCardProps = {
  event: EventCardItem;
};

const EventCard = ({ event }: EventCardProps) => {
  const isUpcoming = event.status === "upcoming";

  return (
    <article className="flex h-full flex-col rounded-lg bg-gray-10 p-5 md:p-7.5">
      <div className="flex items-start justify-between gap-3">
        <Text textColor="gray-85">{event.categoryLabel}</Text>
        <Text
          as="small"
          className={cn(
            "rounded-sm px-2.5 py-1 capitalize",
            isUpcoming
              ? "bg-primary-25 text-primary-70 border border-primary-45"
              : "bg-gray-25 text-gray-90 border border-gray-50",
          )}
        >
          {event.status}
        </Text>
      </div>

      <Divider orientation="horizontal" className="bg-gray-60 my-4 md:my-5" />

      <Text as="h4" weight="semibold">
        {event.title}
      </Text>

      <Text as="h6" textColor="gray-90" className="mt-2.5">
        {event.description}
      </Text>

      <div className="mt-4 flex flex-col gap-2.5">
        <div className="flex items-center gap-1.75">
          <Calendar className="size-4" aria-hidden="true" />
          <Text as="h6">{event.date}</Text>
        </div>
        <div className="flex items-center gap-1.75">
          <MapPinned className="size-4" aria-hidden="true" />
          <Text as="h6">{event.location}</Text>
        </div>
      </div>

      <Divider orientation="horizontal" className="bg-gray-60 my-4 md:my-5" />

      <LinkComponent
        href={event.ctaHref}
        target={event.ctaTarget}
        variant="ghost"
        spacing="none"
        className="flex items-center gap-1.5 underline text-primary"
      >
        {event.ctaLabel}
        <ArrowRight size={16} aria-hidden="true" />
      </LinkComponent>
    </article>
  );
};

export default EventCard;
