"use client";
import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import { useCallback, useMemo, useState } from "react";
import OSImageCard from "./OSImageCard";
import {
  OS_IMAGE_SECTIONS,
  OS_IMAGE_SECTION_TABS,
} from "@/features/cpu-cluster/data/os-image-section-data";
import type { OsSectionId } from "@/features/cpu-cluster/data/os-image-section-types";

const INITIAL_SECTION: OsSectionId = "base-operating-systems";

const OSImageSection = () => {
  const [activeSection, setActiveSection] =
    useState<OsSectionId>(INITIAL_SECTION);
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>("");

  const imageList = OS_IMAGE_SECTIONS[activeSection];

  const selectedImage = useMemo(
    () => imageList.find((item) => item.title === selectedImageTitle),
    [imageList, selectedImageTitle]
  );

  const handleSectionChange = useCallback((section: OsSectionId) => {
    setActiveSection(section);
    setSelectedImageTitle("");
  }, []);

  const handleSelect = useCallback((title: string) => {
    setSelectedImageTitle(title);
  }, []);

  return (
    <Container className="py-[3vh] md:py-[7vh]">
      <Text as="h2" align="center" weight="semibold">
        Pre-built OS, and Images
      </Text>
      <Text as="h2" align="center" weight="semibold" textColor="primary">
        Ready to Deploy
      </Text>
      <Text as="h6" align="center" textColor="black" className="mt-2">
        Boot in seconds with curated stacks, or upload your own ISO.
      </Text>
      <div className="flex items-center justify-center mt-6 md:mt-12 mb-4 md:mb-8">
        {OS_IMAGE_SECTION_TABS.map((tab, idx) => (
          <Button
            key={tab.id}
            className={idx === 0 ? "rounded-r-none" : "rounded-l-none"}
            weight="semibold"
            backgroundColor={
              activeSection === tab.id ? "primary" : "cloud-gray"
            }
            textColor={activeSection === tab.id ? undefined : "black"}
            onClick={() => handleSectionChange(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {imageList.map((item) => (
          <OSImageCard
            key={item.title}
            {...item}
            isSelected={selectedImageTitle === item.title}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-tertiary p-4 md:px-8 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {selectedImage ? (
          <div className="flex items-center gap-1">
            <Text as="h4" textColor="blue-40" weight="normal">
              Selected:
            </Text>
            <Text as="h4" textColor="white" weight="normal">
              {`${selectedImage.title} - ${selectedImage.description}`}
            </Text>
          </div>
        ) : (
          <Text as="h4" textColor="white" weight="normal">
            No Image selected, pick one to continue
          </Text>
        )}
        <Button
          weight="semibold"
          spacing="lg"
          className="w-full md:w-auto"
          disabled={!selectedImage}
          aria-disabled={!selectedImage}
        >
          Continue &nbsp; &rarr;
        </Button>
      </div>
    </Container>
  );
};

export default OSImageSection;
