"use client";

import { useState } from "react";
import Container from "@/shared/components/container";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import type { StepsTabsSectionProps } from "@/shared/types/steps-tabs-section.types";

const StepsTabsSection = ({
  heading,
  description,
  steps,
  previews,
  ariaLabel = "Steps",
  tabIdPrefix = "steps-tabs",
  className,
  children,
}: StepsTabsSectionProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  if (!current) {
    return null;
  }

  const activeTabId = `${tabIdPrefix}-tab-${activeStep}`;
  const activePanelId = `${tabIdPrefix}-panel-${activeStep}`;

  return (
    <section
      className={cn("relative bg-gray-10 py-[3vh] md:py-[7vh]", className)}
    >
      <Container className="flex flex-col items-center justify-center">
        {heading}
        {description}

        <div
          className="my-4 flex z-2 flex-row flex-wrap items-center justify-center gap-4 md:gap-0 md:my-8"
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
                  tabIndex={0}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    isActive
                      ? "bg-primary text-white"
                      : "bg-gray-60 text-black hover:bg-gray-65 hover:text-white"
                  )}
                >
                  {index + 1}
                </Button>
                {index < steps.length - 1 ? (
                  <Divider
                    orientation="horizontal"
                    className="mx-2 w-8 md:w-10"
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-lg mb-8 px-4 md:px-16">
          <div className="flex flex-col md:flex-row">
            <div
              role="tabpanel"
              id={activePanelId}
              aria-labelledby={activeTabId}
              className="w-full bg-white p-4 md:rounded-l-lg md:p-8"
            >
              <Text
                as="small"
                className="inline-block rounded-full bg-primary px-3 py-1 text-white"
              >
                • &nbsp; Step {activeStep + 1} - {current.badgeLabel}
              </Text>
              <Text as="h2" weight="semibold" className="mb-2 mt-4 md:mt-8">
                {current.title}
              </Text>
              <Text as="h6">{current.description}</Text>
              <ul className="mt-4 flex list-none flex-col gap-4 md:mt-8">
                {current.features?.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 rounded-md bg-gray-20 px-4 py-2"
                  >
                    <Text as="h6" textColor="primary" className="shrink-0">
                      •
                    </Text>
                    <Text as="h6" textColor="gray-90">
                      {feature}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
            {previews[activeStep]}
          </div>
        </div>

        {children}
      </Container>
    </section>
  );
};

export default StepsTabsSection;
