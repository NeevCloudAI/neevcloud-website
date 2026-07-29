import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const AI_TEMPLATES_HERO = {
  description:
    "Pre-configured, tested environments for every major AI framework. Launch Jupyter + PyTorch + CUDA, Stable Diffusion, or vLLM in a single click.",
  primaryCta: "Browse Templates",
  primaryCtaRoute: EXTERNAL_LINKS.templates,
  primaryCtaTarget: "_blank",
  badgeText: "AI Templates",
  image: "/images/webp/ai-templates.webp",
  trustBadges: [
    "20+ Pre-Built Templates",
    "< 20s Launch Time",
    "Zero Setup Required",
    "All Major Frameworks",
  ],
} as const;

export const AI_TEMPLATES_FOOTER = {
  title: "Ready to Skip the Setup?",
  description:
    "Launch a pre-configured AI environment in under 20 seconds and start building immediately.",
  primaryCta: "Browse Templates",
  primaryCtaRoute: EXTERNAL_LINKS.templates,
  primaryCtaTarget: "_blank",
} as const;
