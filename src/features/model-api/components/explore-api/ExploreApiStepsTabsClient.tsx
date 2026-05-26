"use client";

import { useState } from "react";
import Container from "@/shared/components/container";
import type { ExploreApiStepsTabsClientProps } from "@/features/model-api/types/explore-api-section.types";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";

const ExploreApiStepsTabsClient = ({
  heading,
  description,
  steps,
  previews,
  ariaLabel = "Steps",
  tabIdPrefix = "steps-tabs",
  children,
}: ExploreApiStepsTabsClientProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  if (!current) {
    return null;
  }

  const activeTabId = `${tabIdPrefix}-tab-${activeStep}`;
  const activePanelId = `${tabIdPrefix}-panel-${activeStep}`;

  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby={`${tabIdPrefix}-section-heading`}
    >
      <Container className="flex flex-col items-center justify-center">
        {heading}
        {description}

        <div
          className="flex z-2 flex-row flex-wrap items-center justify-center gap-4 md:gap-0 mt-4 md:mt-12.5"
          role="tablist"
          aria-label={ariaLabel}
        >
          {steps.map((_, index) => {
            const tabId = `${tabIdPrefix}-tab-${index}`;
            const panelId = `${tabIdPrefix}-panel-${index}`;
            const isActive = activeStep === index;
            return (
              <div key={tabId} className="flex items-center">
                <Button
                  variant="ghost"
                  role="tab"
                  id={tabId}
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-2xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    isActive
                      ? "bg-primary text-white"
                      : "bg-gray-60 text-black hover:bg-gray-65 hover:text-white",
                  )}
                >
                  {index + 1}
                </Button>
                {index < steps.length - 1 ? (
                  <Divider
                    orientation="horizontal"
                    className="mx-2 w-8 md:w-10 bg-blue-40"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-lg px-4 md:px-12 mt-4 md:mt-7.5">
          <div className="flex flex-col md:flex-row md:min-h-[400px]">
            <div
              role="tabpanel"
              id={activePanelId}
              aria-labelledby={activeTabId}
              className="w-full bg-gray-10 p-4 md:rounded-l-lg md:p-8 flex flex-col justify-center"
            >
              <Text
                as="small"
                className="w-fit inline-block rounded-full bg-primary px-2.5 py-0.75 text-white"
              >
                • &nbsp; Step {activeStep + 1} - {current.badgeLabel}
              </Text>
              <Text as="h2" className="mt-4 md:mt-6 text-[30px]">
                {current.title}
              </Text>
              <Text as="h6" className="mt-2.5">
                {current.description}
              </Text>
            </div>
            {previews[activeStep]}
          </div>
        </div>

        {children}
      </Container>
    </section>
  );
};

export default ExploreApiStepsTabsClient;
