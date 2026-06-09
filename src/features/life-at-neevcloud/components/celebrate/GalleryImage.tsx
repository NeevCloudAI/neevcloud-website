import { cn } from "@/lib/utils";
import Image from "next/image";
import type { GalleryImageProps } from "../../types/celebrate-section.types";

const GalleryImage = ({ image, sizes, className }: GalleryImageProps) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-md",
        image.aspectClass,
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
};

export default GalleryImage;
