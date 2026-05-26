import { Button, Text } from "@/shared/ui-lib";
import type { OsImageCard } from "@/features/cpu-cluster/types/os-image-section.types";

type OSImageSelectionBarProps = {
  selectedImage: OsImageCard | undefined;
};

const OSImageSelectionBar = ({ selectedImage }: OSImageSelectionBarProps) => {
  return (
    <div className="mt-10 w-full rounded-lg bg-tertiary px-4 md:px-12.5 py-4 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
  );
};

export default OSImageSelectionBar;
