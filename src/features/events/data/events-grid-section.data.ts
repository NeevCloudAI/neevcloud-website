import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type {
  EventCardItem,
  EventFilterId,
} from "../types/events-grid-section.types";

export const EVENTS_GRID_FILTERS: readonly {
  id: EventFilterId;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past" },
  { id: "conferences", label: "Conferences" },
  { id: "community", label: "Community" },
  { id: "webinars", label: "Webinars" },
] as const;

export const EVENTS_GRID_ITEMS: readonly EventCardItem[] = [
  {
    id: "kubecon-india-2026",
    category: "conference",
    categoryLabel: "CONFERENCE",
    status: "upcoming",
    title: "KubeCon India 2026",
    description:
      "Meet the NeevCloud team at India's premier Kubernetes and cloud-native conference.",
    date: "18-19 June, 2026",
    location: "Mumbai, India",
    ctaLabel: "Register Now",
    ctaHref: EXTERNAL_LINKS.kubeconIndia2026,
    ctaTarget: "_blank",
  },
  {
    id: "india-ai-impact-summit-2026",
    category: "summit",
    categoryLabel: "SUMMIT",
    status: "past",
    title: "India AI Impact Summit 2026",
    description:
      "NeevCloud showcased its Sovereign End-to-End SuperAI Cloud Platform at India's flagship AI summit.",
    date: "Feb 2026",
    location: "Delhi, India",
  },
  {
    id: "gpu-infrastructure-workshop-jan-2026",
    category: "workshop",
    categoryLabel: "WORKSHOP",
    status: "past",
    title: "GPU Infrastructure Workshop",
    description:
      "Hands-on session covering GPU provisioning, workload placement, and production inference patterns.",
    date: "Jan, 2026",
    location: "Bengaluru / Online",
  },
  {
    id: "building-sovereign-ai-webinar",
    category: "webinar",
    categoryLabel: "WEBINAR",
    status: "upcoming",
    title: "Building Sovereign AI Infrastructure in India",
    description:
      "Learn how teams design India-first AI stacks with data residency, GPU scale, and unified APIs.",
    date: "Jul, 2026",
    location: "Online",
  },
  {
    id: "inference-at-scale-webinar",
    category: "webinar",
    categoryLabel: "WEBINAR",
    status: "past",
    title: "Inference at Scale: Real-World GPU Strategies",
    description:
      "Engineering leaders share how they optimize latency, cost, and throughput on production GPU fleets.",
    date: "Mar, 2026",
    location: "Online",
  },
  {
    id: "gpu-infrastructure-deep-dive",
    category: "workshop",
    categoryLabel: "WORKSHOP",
    status: "upcoming",
    title: "GPU Infrastructure Deep-Dive Workshop",
    description:
      "Deep-dive into cluster design, scheduling, and observability for large-scale AI training and inference.",
    date: "Jan, 2026",
    location: "Bangalore / Online",
  },
  {
    id: "community-meetup",
    category: "community",
    categoryLabel: "COMMUNITY",
    status: "upcoming",
    title: "NeevCloud Community Meetup",
    description:
      "Monthly meetup for builders, operators, and researchers working on AI infrastructure in India.",
    date: "Monthly",
    location: "Hyderabad, India",
  },
  {
    id: "ai-developer-day",
    category: "conference",
    categoryLabel: "CONFERENCE",
    status: "past",
    title: "AI Developer Day",
    description:
      "A full-day experience with keynotes, live demos, and technical sessions on the NeevCloud platform.",
    date: "May 2026",
    location: "Bengaluru, India",
  },
  {
    id: "open-office-hours",
    category: "community",
    categoryLabel: "COMMUNITY",
    status: "past",
    title: "NeevCloud Open Office Hours",
    description:
      "Weekly open sessions with the NeevCloud engineering team for architecture reviews and Q&A.",
    date: "Every Thursday",
    location: "Discord / Online",
  },
] as const;

export function matchesEventFilter(
  event: EventCardItem,
  filter: EventFilterId
): boolean {
  switch (filter) {
    case "all":
      return true;
    case "upcoming":
      return event.status === "upcoming";
    case "past":
      return event.status === "past";
    case "conferences":
      return event.category === "conference" || event.category === "summit";
    case "community":
      return event.category === "community";
    case "webinars":
      return event.category === "webinar";
    default:
      return true;
  }
}
