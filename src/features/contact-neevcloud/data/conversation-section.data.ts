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
    title: "Live Chat With Us",
    description: "From startups to enterprises,",
    icon: "calendar",
  },
  {
    id: "phone",
    title: "Live Chat With Us",
    description: "From startups to enterprises,",
    icon: "phone",
  },
  {
    id: "email",
    title: "Live Chat With Us",
    description: "From startups to enterprises,",
    icon: "mail",
  },
] as const;
