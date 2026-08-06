import { Button, LinkComponent, Text } from "@/shared/ui-lib";
import type { OsImageCard } from "../../types/os-image-section.types";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

type OSImageSelectionBarProps = {
  selectedImage: OsImageCard | undefined;
};

const OSImageSelectionBar = ({ selectedImage }: OSImageSelectionBarProps) => {
  return (
    <div className="mt-10 w-full rounded-lg bg-deep-blue px-4 md:px-12.5 py-4 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {selectedImage ? (
        <div className="flex items-center gap-1">
          <Text as="h4" textColor="gray-02" weight="normal">
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
      {/* <Button
        weight="semibold"
        spacing="lg"
        className="w-full md:w-auto"
        disabled={!selectedImage}
        aria-disabled={!selectedImage}
      >
        Continue &nbsp; &rarr;
      </Button> */}
      <LinkComponent
        className={selectedImage ? "" : "pointer-events-none"}
        href={EXTERNAL_LINKS.signup}
        target="/blank"
      >
        Continue &nbsp; &rarr;
      </LinkComponent>
    </div>
  );
};

export default OSImageSelectionBar;
