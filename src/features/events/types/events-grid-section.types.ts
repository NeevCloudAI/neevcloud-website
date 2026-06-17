export type EventCategory =
  | "conference"
  | "summit"
  | "workshop"
  | "webinar"
  | "community";

export type EventStatus = "upcoming" | "past";

export type EventFilterId =
  | "all"
  | "upcoming"
  | "past"
  | "conferences"
  | "community"
  | "webinars";

export type EventCardItem = {
  id: string;
  category: EventCategory;
  categoryLabel: string;
  status: EventStatus;
  title: string;
  description: string;
  date: string;
  location: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaTarget?: "_blank" | "_self" | "_parent" | "_top";
};

export type EventsGridSectionClientProps = {
  events: readonly EventCardItem[];
  filters: readonly { id: EventFilterId; label: string }[];
};
