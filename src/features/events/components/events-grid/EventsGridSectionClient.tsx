"use client";

import { useMemo, useState } from "react";
import { Button } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import { matchesEventFilter } from "../../data/events-grid-section.data";
import type {
  EventFilterId,
  EventsGridSectionClientProps,
} from "../../types/events-grid-section.types";
import EventCard from "./EventCard";

const EventsGridSectionClient = ({
  events,
  filters,
}: EventsGridSectionClientProps) => {
  const [activeFilter, setActiveFilter] = useState<EventFilterId>("all");

  const filteredEvents = useMemo(
    () => events.filter((event) => matchesEventFilter(event, activeFilter)),
    [events, activeFilter],
  );

  return (
    <>
      <div
        className="grid w-full grid-cols-2 overflow-hidden rounded-lg md:grid-cols-6 mt-8 md:mt-12.5"
        role="tablist"
        aria-label="Event filters"
      >
        {filters.map((filter, index) => {
          const isSelected = activeFilter === filter.id;
          const isFirst = index === 0;
          const isLast = index === filters.length - 1;

          return (
            <Button
              key={filter.id}
              id={`events-filter-tab-${filter.id}`}
              role="tab"
              type="button"
              size="full"
              aria-selected={isSelected}
              aria-controls="events-grid-panel"
              tabIndex={isSelected ? 0 : -1}
              fontFamily="spaceMono"
              spacing="lg"
              variant={isSelected ? undefined : "black"}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "rounded-none py-4 text-sm transition-colors",
                !isLast && "border-r border-gray-05",
                isFirst && "rounded-l-md",
                isLast && "rounded-r-md",
                isSelected
                  ? "bg-primary-105 text-black"
                  : "border-gray-05 text-gray-04",
              )}
            >
              {filter.label}
            </Button>
          );
        })}
      </div>

      <ul
        id="events-grid-panel"
        role="tabpanel"
        aria-labelledby={`events-filter-tab-${activeFilter}`}
        className="m-0 mt-4 grid list-none grid-cols-1 gap-5 p-0 md:mt-12.5 md:grid-cols-3"
      >
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsGridSectionClient;
