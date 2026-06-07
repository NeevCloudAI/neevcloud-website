import { cn } from "@/lib/utils";
import { Button, Text } from "@/shared/ui-lib";
import { GPU_MODEL_FAMILY_OPTIONS } from "../data/model-transparent-pricing-section.data";
import type { GpuModelTransparentPricingSidebarProps } from "../types/model-transparent-pricing-section.types";

const GpuModelTransparentPricingSidebar = ({
  activeFamily,
  onFamilySelect,
}: GpuModelTransparentPricingSidebarProps) => {
  return (
    <div className="shrink-0">
      <Text as="h6" textColor="gray-75" fontFamily="spaceMono">
        Instance Families
      </Text>
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="GPU model family tabs"
        className="mt-4"
      >
        <ul className="flex list-none flex-col gap-1.5">
          {GPU_MODEL_FAMILY_OPTIONS.map((option) => {
            const isActive = option.id === activeFamily;
            return (
              <li key={option.id}>
                <Button
                  variant="ghost"
                  size="none"
                  spacing="none"
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`${option.id}-model-panel`}
                  id={`${option.id}-model-tab`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => onFamilySelect(option.id)}
                  className={cn(
                    "w-full rounded-md border bg-black-25/60 px-5 py-2.5 text-left",
                    isActive ? "border-primary-105" : "border-gray-97"
                  )}
                >
                  <Text as="h6" fontFamily="spaceMono" textColor="white">
                    <Text
                      as="span"
                      fontFamily="spaceMono"
                      textColor={isActive ? "primary" : "gray-75"}
                    >
                      {option.number}
                    </Text>
                    <Text
                      as="span"
                      fontFamily="spaceMono"
                      textColor="white"
                      className="ml-2"
                    >
                      {option.label}
                    </Text>
                  </Text>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GpuModelTransparentPricingSidebar;
