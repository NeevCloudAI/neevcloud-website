import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const MEDIA_APPLICATION_CARDS: readonly ApplicationCardItem[] = [
  {
    id: "feature-films-episodic-vfx",
    className: "md:row-span-2",
    label: "01 - FEATURED",
    title: "Feature Films & Episodic VFX",
    description:
      "Render thousands of frames in parallel for feature animation and live-action visual effects. Path-traced light, volumetrics, and crowd sims available.",
    icon: "/icons/brain.svg",
    image: "/images/fraud-detection.png",
  },
  {
    id: "simulations-fx",
    className: "md:col-span-1",
    label: "02",
    title: "Simulations & FX",
    description:
      "Fluid, smoke, fire, cloth and destruction sims at full resolution. Houdini and Embergen running on multi-GPU nodes.",
    icon: "/icons/brain.svg",
  },
  {
    id: "virtual-production",
    className: "md:col-span-1",
    label: "03",
    title: "Virtual Production",
    description:
      "Unreal-driven LED-wall pipelines with cloud rendering for hero shots. Real-time camera tracking and in-camera VFX.",
    icon: "/icons/brain.svg",
  },
  {
    id: "ai-video-generative",
    className: "md:col-span-1",
    label: "04",
    title: "AI Video & Generative",
    description:
      "Run Stable Video, AnimateDiff, and custom diffusion models for previz, motion graphics, and AI-assisted post.",
    icon: "/icons/brain.svg",
  },
  {
    id: "architectural-viz-product",
    className: "md:col-span-1",
    label: "05",
    title: "Architectural Viz & Product",
    description:
      "Twinmotion, Lumion, V-Ray render farms for hero stills, walkthroughs, and configurator pipelines.",
    icon: "/icons/brain.svg",
  },
] as const;
