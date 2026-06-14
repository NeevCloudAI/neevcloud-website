import { cn } from "@/lib/utils";
import { Button, Text } from "@/shared/ui-lib";
import { AI_INFERENCE_MODEL_FAMILY_OPTIONS } from "../data/transparent-pricing-section.data";
import type { AiInferenceTransparentPricingModelFamilySidebarProps } from "../types/transparent-pricing-section.types";

const AiInferenceTransparentPricingModelFamilySidebar = ({
  activeFamily,
  onFamilySelect,
}: AiInferenceTransparentPricingModelFamilySidebarProps) => {
  return (
    <div>
      <Text as="h6" textColor="gray-04" fontFamily="spaceMono">
        Instance Families
      </Text>
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Inference model family tabs"
        className="mt-4"
      >
        <ul className="flex list-none flex-col gap-1.5">
          {AI_INFERENCE_MODEL_FAMILY_OPTIONS.map((option) => {
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
                  aria-controls={`${option.id}-panel`}
                  id={`${option.id}-tab`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => onFamilySelect(option.id)}
                  className={cn(
                    "w-full rounded-md border bg-white/6 px-5 py-2.5 text-left md:w-70 border-white/12"
                  )}
                >
                  <Text as="h6" fontFamily="spaceMono" textColor="white">
                    <Text
                      as="span"
                      fontFamily="spaceMono"
                      textColor={isActive ? "primary" : "gray-04"}
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

export default AiInferenceTransparentPricingModelFamilySidebar;
