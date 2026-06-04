import type { OsImageCard, OsSectionId } from "../types/os-image-section.types";

export const OS_IMAGE_SECTIONS: Record<OsSectionId, OsImageCard[]> = {
  "base-operating-systems": [
    {
      title: "Blender",
      description: "Cycles · Eevee",
      image: "/icons/blender.svg",
      cards: [],
    },
    {
      title: "Maya",
      description: "Arnold",
      image: "/icons/maya.svg",
      cards: [],
    },
    {
      title: "Houdini",
      description: "Mantra · Karma",
      image: "/icons/houdini.svg",
      cards: [],
    },
    {
      title: "Unreal Engine",
      description: "5.4 · 5.5",
      image: "/icons/unreal-engine.svg",
      cards: [],
    },
    {
      title: "Redshift",
      description: "v3.5+",
      image: "/icons/redshift.svg",
      cards: [],
    },
    {
      title: "Octane Render",
      description: "v2024",
      image: "/icons/octane-render.svg",
      cards: [],
    },
    {
      title: "V-Ray",
      description: "v7.5+",
      image: "/icons/v-ray.svg",
      cards: [],
    },
    {
      title: "Custom",
      description: "Rendering Pipelines",
      image: "/icons/custom.svg",
      cards: [],
    },
  ],
};

export const OS_IMAGE_SECTION_TABS = [
  { id: "base-operating-systems", label: "Base Operating Systems" },
] as const satisfies ReadonlyArray<{ id: OsSectionId; label: string }>;
