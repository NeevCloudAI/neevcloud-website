import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import {
  GALLERY_LEFT_COLUMN,
  GALLERY_RIGHT_COLUMN,
  GALLERY_SECTION,
} from "../../data/celebrate-section.data";
import GalleryImage from "./GalleryImage";

const CelebrateGallery = () => {
  return (
    <div
      className="mt-4 w-full md:mt-12.5"
      aria-labelledby="life-at-neevcloud-gallery-heading"
    >
      <Text
        as="h2"
        id="life-at-neevcloud-gallery-heading"
        textColor="black"
        align="center"
      >
        {GALLERY_SECTION.title}
      </Text>
      <Text
        as="h6"
        align="center"
        textColor="black/82"
        className="mt-2.5 max-w-3xl mx-auto"
      >
        {GALLERY_SECTION.description}
      </Text>

      <div className="mt-4 grid grid-cols-1 gap-5 md:mt-12.5 md:grid-cols-3">
        <ul className="m-0 flex list-none flex-col gap-5 p-0">
          {GALLERY_LEFT_COLUMN.map((image) => (
            <li key={image.id}>
              <GalleryImage
                image={image}
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </li>
          ))}
        </ul>

        <ul className="m-0 grid list-none grid-cols-2 gap-5 p-0 md:col-span-2">
          {GALLERY_RIGHT_COLUMN.map((image) => (
            <li
              key={image.id}
              className={cn(image.colSpan === 2 && "col-span-2")}
            >
              <GalleryImage
                image={image}
                sizes={
                  image.colSpan === 2
                    ? "(min-width: 768px) 66vw, 100vw"
                    : "(min-width: 768px) 33vw, 100vw"
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CelebrateGallery;
