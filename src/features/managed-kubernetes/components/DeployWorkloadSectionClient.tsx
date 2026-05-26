"use client";

import { useState } from "react";
import { Button } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import WorkloadCodeCard from "@/features/managed-kubernetes/components/deploy-workload/WorkloadCodeCard";
import { WORKLOAD_PANELS } from "@/features/managed-kubernetes/components/deploy-workload/workload-panels";
import { DEFAULT_WORKLOAD_INDEX } from "@/features/managed-kubernetes/constants/deploy-workload-section.constants";
import { WORKLOAD_OPTIONS } from "@/features/managed-kubernetes/data/deploy-workload-section.data";

const DeployWorkloadSectionClient = () => {
  const [selectedIndex, setSelectedIndex] = useState(DEFAULT_WORKLOAD_INDEX);
  const ActivePanel = WORKLOAD_PANELS[selectedIndex];
  const selectedOption = WORKLOAD_OPTIONS[selectedIndex];

  return (
    <>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-4 items-center justify-between mt-4 md:mt-12.5"
        role="tablist"
        aria-label="Workload options"
      >
        {WORKLOAD_OPTIONS.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isLast = index === WORKLOAD_OPTIONS.length - 1;
          const isFirst = index === 0;
          const tabId = `workload-tab-${option.id}`;

          return (
            <Button
              key={option.id}
              id={tabId}
              role="tab"
              type="button"
              size="full"
              aria-selected={isSelected}
              aria-controls={`workload-panel-${option.id}`}
              tabIndex={isSelected ? 0 : -1}
              fontFamily="spaceMono"
              spacing="lg"
              variant={isSelected ? undefined : "black"}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "rounded-none py-4 transition-colors text-sm",
                !isLast && "border-b md:border-b-0 md:border-r",
                isFirst && "rounded-l-md",
                isLast && "rounded-r-md",
                isSelected
                  ? "bg-primary-100 text-black"
                  : "border-gray-90 text-gray-65",
              )}
            >
              {option.label}
            </Button>
          );
        })}
      </div>

      <WorkloadCodeCard
        key={selectedOption.id}
        panelId={`workload-panel-${selectedOption.id}`}
        labelledBy={`workload-tab-${selectedOption.id}`}
      >
        <ActivePanel />
      </WorkloadCodeCard>
    </>
  );
};

export default DeployWorkloadSectionClient;
