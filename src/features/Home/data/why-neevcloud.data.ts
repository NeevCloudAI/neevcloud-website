import type { WhyFeature } from "../types/why-neevcloud.types";

export const WHY_NEEVCLOUD = {
  title: "Why the world Needs NeevCloud?",
  description:
    'Legacy cloud providers and expensive "neoclouds" often force a choice between performance and price. We believe you should have both. NeevCloud is India’s first AI Supercloud, built from the ground up to make intelligence accessible to everyone.',
} as const;

export const WHY_FEATURES: WhyFeature[] = [
  {
    icon: "/images/home/why/icon-no-vendor-lock-in.png",
    title: "No Vendor Lock-In",
    description:
      "Move your data and models freely. We believe in technology freedom, not walled gardens.",
  },
  {
    icon: "/images/home/why/icon-transparent-pricing.png",
    title: "Transparent Pricing",
    description:
      "What you see is what you pay. No hidden egress fees or surprise billing.",
  },
  {
    icon: "/images/home/why/icon-sovereign-secure.png",
    title: "Sovereign & Secure",
    description:
      "Your data remains under your control, secured by strict global standards and local compliance.",
  },
];

export const LEGACY_CLOUD_ITEMS: string[] = [
  "Vendor Lock-In",
  "Unpredictable Costs",
  "Data Compliance Risks",
  "Limited Data Sovereignty",
  "Security Vulnerabilities",
];

// TODO: the "Advantage" copy below reads like placeholder text in the Paper
// design — confirm the real NeevCloud advantage points.
export const NEEVCLOUD_ADVANTAGE_ITEMS: string[] = [
  "AI-native infrastructure",
  "Deadlines, owners & reminders in one place",
  "Inspection dossier ready on demand",
  "Your team freed for the judgment calls",
  "Nothing slips — and an expert on call",
];
