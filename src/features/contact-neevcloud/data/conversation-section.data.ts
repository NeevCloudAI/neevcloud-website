import type { ContactInfoCardItem } from "../types/conversation-section.types";

export const CONVERSATION_SECTION = {
  titlePrefix: "Start the",
  titleHighlight: "Conversation",
  description:
    "From startups to enterprises, we help teams deploy, scale, and optimize AI workloads with confidence.",
} as const;

export const CONTACT_INFO_CARDS: readonly ContactInfoCardItem[] = [
  {
    id: "live-chat",
    title: "Book a Meeting",
    description: "Schedule a guided session with our team",
    icon: "calendar",
    href: "https://calendly.com/neevcloud/new-meeting",
  },
  {
    id: "phone",
    title: "Call Us",
    description: "Talk to our experts directly",
    icon: "phone",
    href: "tel:+919993092798",
  },
  {
    id: "email",
    title: "Email Us",
    description: "Write to us — we reply within one business day.",
    icon: "mail",
    href: "mailto:sales@neevcloud.com",
  },
] as const;
