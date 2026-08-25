export const AI_SUPERCLUSTER_CALENDLY_URL =
  "https://calendly.com/tarun-mishra-neevcloud/30min";

export const AI_SUPERCLUSTER_HERO_STATS = [
  { value: "1K–16K", label: "GPUs per supercluster" },
  { value: "99.95%", label: "SLA across DCs" },
  { value: "AI Gigacampus", label: "Purpose-built" },
] as const;

export const AI_SUPERCLUSTER_FOOTER = {
  title: "Talk to a GPU Architect",
  description:
    "Tell us your workload and we'll design the right AI Supercluster for it — no sales scripts, a real conversation with a NeevCloud GPU engineer.",
  primaryCta: "Schedule a Call",
  primaryCtaRoute: AI_SUPERCLUSTER_CALENDLY_URL,
  primaryCtaTarget: "_blank",
  secondaryCta: "Explore the GPU Lineup",
  secondaryCtaRoute: "#gpu-lineup",
} as const;
