import type { VariantProps } from "class-variance-authority";
import type { textVariants } from "@/shared/ui-lib/text/text-variants";

export type CelebrateStatColor = NonNullable<
  VariantProps<typeof textVariants>["textColor"]
>;

export type CelebrateStatItem = {
  id: string;
  stat: string;
  statColor: CelebrateStatColor;
  label: string;
};

export type CelebrateStatCardProps = {
  item: CelebrateStatItem;
};

export type GalleryImageItem = {
  id: string;
  src: string;
  alt: string;
  aspectClass: string;
  colSpan?: 1 | 2;
};

export type GalleryImageProps = {
  image: GalleryImageItem;
  sizes: string;
  className?: string;
};
