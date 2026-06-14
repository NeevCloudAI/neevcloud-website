"use client";

import { Button, Text } from "@/shared/ui-lib";
import { useId, useState } from "react";
import { DEFAULT_USE_CASE_ID } from "../constants/use-cases-section.constants";
import { USE_CASES } from "../data/use-cases-section.data";
import UseCasePanel from "./UseCasePanel";

const UseCasesSectionClient = () => {
  const [activeTab, setActiveTab] = useState<string>(DEFAULT_USE_CASE_ID);
  const tabListId = useId();

  return (
    <>
      <div
        id={tabListId}
        role="tablist"
        aria-label="GPU workload use cases"
        className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-b border-gray-01 items-center justify-center mt-4 md:mt-12.5"
      >
        {USE_CASES.map((tab) => {
          const tabId = `use-case-tab-${tab.id}`;
          const panelId = `use-case-panel-${tab.id}`;
          const isSelected = activeTab === tab.id;

          return (
            <Button
              key={tab.id}
              id={tabId}
              role="tab"
              type="button"
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              variant="ghost"
              textColor="black"
              size="full"
              onClick={() => setActiveTab(tab.id)}
              className={`flex gap-1 flex-col items-start p-5 border border-b-0 border-gray-01 rounded-lg rounded-b-none ${isSelected ? "bg-deep-blue text-white" : ""}`}
            >
              <Text as="h6">{tab.id}</Text>
              <Text as="h4" weight="semibold">
                {tab.tabName}
              </Text>
            </Button>
          );
        })}
      </div>
      {USE_CASES.map((useCase) => (
        <UseCasePanel
          key={useCase.id}
          useCase={useCase}
          panelId={`use-case-panel-${useCase.id}`}
          labelledBy={`use-case-tab-${useCase.id}`}
          hidden={activeTab !== useCase.id}
        />
      ))}
    </>
  );
};

export default UseCasesSectionClient;
