import { cn } from "@/lib/utils";
import { Button, Text } from "@/shared/ui-lib";
import type { GettingStartedStepsSidebarProps } from "../../types/getting-started-section.types";

const GettingStartedStepsSidebar = ({
  steps,
  activeStep,
  onStepSelect,
}: GettingStartedStepsSidebarProps) => {
  return (
    <div className="w-full md:w-80">
      <Text as="h6" textColor="gray-80" fontFamily="spaceMono">
        steps
      </Text>
      <div
        role="tablist"
        aria-label="Object storage getting started steps"
        className="mt-4"
      >
        <div className="flex flex-col gap-1.5">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const tabId = `object-storage-getting-started-tab-${index}`;

            return (
              <Button
                key={step.id}
                variant="ghost"
                size="full"
                spacing="none"
                id={tabId}
                role="tab"
                aria-selected={isActive}
                aria-controls={`object-storage-getting-started-panel-${index}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => onStepSelect(index)}
                className={cn(
                  "rounded-md border px-5 py-2.5 text-left flex items-center gap-2.5",
                  isActive
                    ? "border-primary-90/18 bg-primary-90/12"
                    : "border-white/12 bg-white/6",
                )}
              >
                <Text
                  as="h6"
                  textColor={isActive ? "primary" : "gray-04"}
                  fontFamily="spaceMono"
                  weight="regular"
                >
                  {step.number}
                </Text>
                <Text
                  as="h6"
                  weight="regular"
                  fontFamily="spaceMono"
                  textColor={isActive ? "white" : "white/60"}
                >
                  {step.sidebarLabel}
                </Text>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GettingStartedStepsSidebar;
