import {
  ArrowRight,
  Calendar,
  MapPinned,
} from "@/shared/icons/lucide-icon-map";
import { Divider, Text, LinkComponent } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import type { EventCardItem } from "../../types/events-grid-section.types";

type EventCardProps = {
  event: EventCardItem;
};

const EventCard = ({ event }: EventCardProps) => {
  const isUpcoming = event.status === "upcoming";

  return (
    <article className="flex h-full flex-col rounded-lg bg-cloud-gray p-5 md:p-7.5">
      <div className="flex items-start justify-between gap-3">
        <Text textColor="gray-03">{event.categoryLabel}</Text>
        <Text
          as="small"
          textColor={isUpcoming ? "primary-90" : "gray-05"}
          className={cn(
            "rounded-sm px-2.5 py-1 capitalize",
            isUpcoming
              ? "bg-primary/12 border border-primary/18"
              : "bg-gray-05/12 border border-gray-05/18"
          )}
        >
          {event.status}
        </Text>
      </div>

      <Divider orientation="horizontal" className="bg-gray-01 my-4 md:my-5" />

      <Text as="h4" weight="semibold">
        {event.title}
      </Text>

      <Text as="h6" textColor="gray-05" className="mt-2.5">
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

      <Divider orientation="horizontal" className="bg-gray-01 my-4 md:my-5" />

      {event.ctaHref && (
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
      )}
    </article>
  );
};

export default EventCard;
