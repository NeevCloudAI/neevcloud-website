"use client";

import { Button } from "@/shared/ui-lib";
import { useCallback, useMemo, useState } from "react";
import OSImageCard from "@/features/cpu-cluster/components/os-image/OSImageCard";
import OSImageSelectionBar from "@/features/cpu-cluster/components/os-image/OSImageSelectionBar";
import { DEFAULT_OS_IMAGE_SECTION } from "@/features/cpu-cluster/constants/os-image-section.constants";
import {
  OS_IMAGE_SECTIONS,
  OS_IMAGE_SECTION_TABS,
} from "@/features/cpu-cluster/data/os-image-section.data";
import type { OsSectionId } from "@/features/cpu-cluster/types/os-image-section.types";

const OSImageSectionClient = () => {
  const [activeSection, setActiveSection] =
    useState<OsSectionId>(DEFAULT_OS_IMAGE_SECTION);
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>("");

  const imageList = OS_IMAGE_SECTIONS[activeSection];

  const selectedImage = useMemo(
    () => imageList.find((item) => item.title === selectedImageTitle),
    [imageList, selectedImageTitle],
  );

  const handleSectionChange = useCallback((section: OsSectionId) => {
    setActiveSection(section);
    setSelectedImageTitle("");
  }, []);

  const handleSelect = useCallback((title: string) => {
    setSelectedImageTitle(title);
  }, []);

  return (
    <>
      <div
        className="flex items-center justify-center mt-6 md:mt-12.5 mb-4 md:mb-7.5"
        role="group"
        aria-label="OS image categories"
      >
        {OS_IMAGE_SECTION_TABS.map((tab, idx) => (
          <Button
            key={tab.id}
            type="button"
            className={idx === 0 ? "rounded-r-none" : "rounded-l-none"}
            weight="semibold"
            backgroundColor={
              activeSection === tab.id ? "primary" : "cloud-gray"
            }
            textColor={activeSection === tab.id ? undefined : "black"}
            aria-pressed={activeSection === tab.id}
            onClick={() => handleSectionChange(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-4 gap-4"
        role="list"
        aria-label={`${activeSection === "base-operating-systems" ? "Base operating systems" : "Pre-configured images"}`}
      >
        {imageList.map((item) => (
          <div key={item.title} role="listitem">
            <OSImageCard
              {...item}
              isSelected={selectedImageTitle === item.title}
              onSelect={handleSelect}
            />
          </div>
        ))}
      </div>
      <OSImageSelectionBar selectedImage={selectedImage} />
    </>
  );
};

export default OSImageSectionClient;
