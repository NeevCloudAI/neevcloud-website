import type {
  CelebrateStatItem,
  GalleryImageItem,
} from "../types/celebrate-section.types";

export const CELEBRATE_SECTION = {
  titlePrefix: "We celebrate more than milestones;",
  titleHighlight: "we celebrate people",
  description:
    "Every occasion brings the team together, making NeevCloud a place that feels vibrant, inclusive, and alive.",
} as const;

export const CELEBRATE_STATS: readonly CelebrateStatItem[] = [
  {
    id: "years-celebrated",
    stat: "14+",
    statColor: "primary",
    label: "Years celebrated",
  },
  {
    id: "birthday-honoured",
    stat: "Every",
    statColor: "red-50",
    label: "Birthday honoured",
  },
  {
    id: "monthly-gatherings",
    stat: "Monthly",
    statColor: "white",
    label: "Birthday honoured",
  },
  {
    id: "inclusive-team",
    stat: "One",
    statColor: "white",
    label: "Inclusive team",
  },
] as const;

export const GALLERY_SECTION = {
  title: "Gallery",
  description: "A glimpse into everyday life at NeevCloud",
} as const;

export const GALLERY_LEFT_COLUMN: readonly GalleryImageItem[] = [
  {
    id: "gallery-1",
    src: "/images/gallery-1.png",
    alt: "",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "gallery-2",
    src: "/images/gallery-3.png",
    alt: "",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "gallery-3",
    src: "/images/gallery-6.png",
    alt: "",
    aspectClass: "aspect-[4/3]",
  },
] as const;

export const GALLERY_RIGHT_COLUMN: readonly GalleryImageItem[] = [
  {
    id: "gallery-4",
    src: "/images/gallery-2.png",
    alt: "",
    aspectClass: "aspect-[21/8]",
    colSpan: 2,
  },
  {
    id: "gallery-5",
    src: "/images/gallery-4.png",
    alt: "",
    aspectClass: "aspect-[4/5]",
    colSpan: 1,
  },
  {
    id: "gallery-7",
    src: "/images/gallery-5.png",
    alt: "",
    aspectClass: "aspect-[4/5]",
    colSpan: 1,
  },
  {
    id: "gallery-6",
    src: "/images/gallery-7.png",
    alt: "",
    aspectClass: "aspect-[21/8]",
    colSpan: 2,
  },
] as const;
