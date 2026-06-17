import { cn } from "@/lib/utils";
import { Button, Text } from "@/shared/ui-lib";
import type { GettingStartedStep } from "../../types/getting-started-section.types";

type GettingStartedLanguageTabsProps = {
  step: GettingStartedStep;
  activeTabId: string;
  onTabSelect: (tabId: string) => void;
};

const GettingStartedLanguageTabs = ({
  step,
  activeTabId,
  onTabSelect,
}: GettingStartedLanguageTabsProps) => {
  return (
    <div
      role="tablist"
      aria-label={`${step.title} code language tabs`}
      className="mt-4 md:mt-7.5 flex flex-wrap items-center gap-4 md:gap-5"
    >
      {step.tabs.map((tab) => {
        const isActive = tab.id === activeTabId;

        return (
          <Button
            key={tab.id}
            type="button"
            variant="ghost"
            size="md"
            borderRadius="none"
            spacing="none"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onTabSelect(tab.id)}
            className={cn(
              "transition-colors",
              isActive ? "border-b border-primary text-primary" : "text-white"
            )}
          >
            {tab.label}
          </Button>
        );
      })}
    </div>
  );
};

export default GettingStartedLanguageTabs;
