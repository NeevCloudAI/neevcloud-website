import type {
  ContactFormField,
  ContactInfoCardItem,
} from "../types/conversation-section.types";

export const CONVERSATION_SECTION = {
  titlePrefix: "Start the",
  titleHighlight: "Conversation",
  description:
    "From startups to enterprises, we help teams deploy, scale, and optimize AI workloads with confidence.",
  submitButtonText: "Leave us a Message",
  consentTexts: [
    "I agree to receive communication from NeevCloud regarding newsletters, promotional content, updates, offers, and events via SMS, RCS, WhatsApp, and email.",
    "I agree to the Terms and Conditions and confirm that all the information provided is accurate and true.",
  ],
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

export const CONTACT_FORM_FIELDS: readonly ContactFormField[] = [
  {
    id: "name",
    label: "Your Name",
    name: "name",
    type: "text",
    autoComplete: "name",
  },
  {
    id: "email",
    label: "Business email",
    name: "email",
    type: "email",
    autoComplete: "email",
  },
  {
    id: "phone",
    label: "Phone Number (optional)",
    name: "phone",
    type: "tel",
    autoComplete: "tel",
    optional: true,
  },
  {
    id: "company",
    label: "Company name",
    name: "company",
    type: "text",
    autoComplete: "organization",
  },
  {
    id: "message",
    label: "Message",
    name: "message",
    type: "textarea",
    fullWidth: true,
  },
] as const;
