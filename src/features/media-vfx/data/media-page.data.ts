import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const MEDIA_HERO = {
  badgeText: "Media & VFX",
  description:
    "From 3D animation to cinematic effects, media workflows demand massive compute on tight deadlines. NeevCloud provides GPU infrastructure that scales with your production, so you can render faster, iterate in real time, and deliver on schedule.",
  primaryCta: "Start Rendering",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "Talk to Sales",
  secondaryCtaRoute: "/contact-neevcloud#contact-form",
  image: "/images/webp/media-vfx.webp",
  trustBadges: [
    "H100 and A100 GPUs",
    "Real-time rendering",
    "Scalable render farms",
    "Per-second billing",
    "Data sovereignty",
  ],
} as const;

export const MEDIA_FOOTER = {
  title: "Start Rendering on GPU Cloud",
  description:
    "Scale your render farm on-demand. H100 and A100 GPUs for feature films, animation, and VFX. Per-second billing, instant provisioning.",
  primaryCta: "Start Rendering",
  secondaryCta: "Talk to Sales",
  secondaryCtaRoute: "/contact-neevcloud#contact-form",
} as const;
