"use client";

import OSImageCard from "./OSImageCard";
import { OS_IMAGE_SECTIONS } from "../../data/os-image-section.data";

const OSImageSectionClient = () => {
  const imageList = OS_IMAGE_SECTIONS["base-operating-systems"];

  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 md:mt-12.5"
      role="list"
      aria-label="OS images"
    >
      {imageList.map((item) => (
        <div key={item.title} role="listitem">
          <OSImageCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default OSImageSectionClient;
