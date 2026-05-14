"use client";

import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import {
  STACK_SECTION_PANELS_LEFT,
  STACK_SECTION_PANELS_RIGHT,
  type StackSectionPanel,
} from "../constants/stack-section.constants";
import Image from "next/image";
import { useState } from "react";

type StackPanelProps = {
  panel: StackSectionPanel;
  className?: string;
  activeItemId: string;
  onToggleItem: (itemId: string) => void;
};

function StackPanel({
  panel,
  className,
  activeItemId,
  onToggleItem,
}: StackPanelProps) {
  const isActive = panel.items.some((item) => item.id === activeItemId);

  return (
    <article
      className={cn(
        "flex flex-col rounded-lg p-2 text-gray-90",
        isActive ? "opacity-100" : "opacity-50",
        className,
      )}
      aria-labelledby={`stack-panel-${panel.id}-title`}
    >
      <Text as="h3" weight="semibold" id={`stack-panel-${panel.id}-title`}>
        {panel.title}
      </Text>
      <Text className="my-2">{panel.description}</Text>
      <div className="flex flex-col">
        {panel.items.map((item) => (
          <div key={item.id} className="w-full">
            <button
              id={`stack-item-button-${panel.id}-${item.id}`}
              type="button"
              onClick={() => onToggleItem(item.id)}
              className="group flex w-full cursor-pointer items-center justify-between gap-4 border-b border-gray-50 py-3 text-left transition-colors hover:text-black"
              aria-expanded={activeItemId === item.id}
              aria-controls={`stack-item-content-${panel.id}-${item.id}`}
              aria-label={`Toggle ${item.label}`}
            >
              <span className="flex items-center gap-2">
                <Text as="span" weight="medium">
                  {item.label}
                </Text>
              </span>
              <span
                className={cn(
                  " text-2xl font-normal leading-none transition-transform duration-200 select-none",
                  activeItemId === item.id && "rotate-45",
                )}
                aria-hidden
              >
                +
              </span>
            </button>

            <div
              id={`stack-item-content-${panel.id}-${item.id}`}
              role="region"
              aria-hidden={activeItemId !== item.id}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                activeItemId === item.id
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
              aria-labelledby={`stack-item-button-${panel.id}-${item.id}`}
            >
              <div className="overflow-hidden">
                <Text className="px-1 pb-3 text-balance leading-relaxed">
                  {item.description}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

const StackSection = () => {
  const [leftTop, leftBottom] = STACK_SECTION_PANELS_LEFT;
  const [rightTop, rightBottom] = STACK_SECTION_PANELS_RIGHT;
  const stackPanels = [leftTop, rightTop, leftBottom, rightBottom];
  const initialActiveItemId =
    stackPanels.flatMap((panel) => panel.items)[0]?.id ?? "";
  const [activeItemId, setActiveItemId] = useState<string>(initialActiveItemId);

  const handleToggleItem = (itemId: string) => {
    setActiveItemId((currentItemId) =>
      currentItemId === itemId ? "" : itemId,
    );
  };

  const resolvedActivePanelIndex = (() => {
    const idx = stackPanels.findIndex((panel) =>
      panel.items.some((item) => item.id === activeItemId),
    );
    return idx === -1 ? 0 : idx;
  })();

  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat overflow-hidden bg-gray-10 py-[3vh] md:py-[7vh]">
      <Container className="relative flex flex-col gap-4 md:gap-12">
        <header className="flex flex-col items-center gap-1 md:gap-3 text-center">
          <div className="flex flex-row">
            <Text as="h2" weight="semibold">
              One
              <Text as="span" textColor="primary" variant="h2">
                Vertical Stack
              </Text>
              . Silicon to endpoint.
            </Text>
          </div>
          <Text as="h6" textColor="black">
            Deploy AI on infrastructure designed for scale, resilience, and
            speed.
          </Text>
        </header>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col gap-2 md:gap-4 flex-1">
            <StackPanel
              panel={leftTop}
              className="lg:col-start-1 lg:row-start-1"
              activeItemId={activeItemId}
              onToggleItem={handleToggleItem}
            />
            <StackPanel
              panel={leftBottom}
              className="lg:col-start-1 lg:row-start-2"
              activeItemId={activeItemId}
              onToggleItem={handleToggleItem}
            />
          </div>

          <div className="relative flex-1 hidden md:block">
            {stackPanels.map((panel, index) => {
              const isActive = resolvedActivePanelIndex === index;
              return (
                <div
                  key={panel.id}
                  className={cn(`absolute left-0`)}
                  style={{
                    top:
                      index == 0
                        ? 0
                        : index === stackPanels.length - 1
                          ? 380
                          : index * 140,
                    zIndex: isActive ? 6 : stackPanels.length - index,
                    opacity: isActive ? 1 : 0.65,
                  }}
                >
                  <Image
                    src={`/icons/stack-${index + 1}.svg`}
                    alt={`stack layer`}
                    width={300}
                    height={300}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 flex-1 md:mt-20">
            <StackPanel
              panel={rightTop}
              className="lg:col-start-3 lg:row-start-1"
              activeItemId={activeItemId}
              onToggleItem={handleToggleItem}
            />
            <StackPanel
              panel={rightBottom}
              className="lg:col-start-3 lg:row-start-2"
              activeItemId={activeItemId}
              onToggleItem={handleToggleItem}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StackSection;
