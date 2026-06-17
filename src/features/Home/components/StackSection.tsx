"use client";

import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  STACK_SECTION_PANELS_LEFT,
  STACK_SECTION_PANELS_RIGHT,
} from "../data/stack-section-panels";
import { useState } from "react";
import StackPanel from "./StackPanel";
import StackLayers from "./StackLayers";

const StackSection = () => {
  const [leftTop, leftBottom] = STACK_SECTION_PANELS_LEFT;
  const [rightTop, rightBottom] = STACK_SECTION_PANELS_RIGHT;
  const stackPanels = [leftTop, rightTop, leftBottom, rightBottom];
  const initialActiveItemId =
    stackPanels.flatMap((panel) => panel.items)[0]?.id ?? "";
  const [activeItemId, setActiveItemId] = useState<string>(initialActiveItemId);

  const handleToggleItem = (itemId: string) => {
    setActiveItemId((currentItemId) =>
      currentItemId === itemId ? "" : itemId
    );
  };

  const handleSelectPanel = (panelIndex: number) => {
    const firstItemId = stackPanels[panelIndex]?.items[0]?.id;
    if (!firstItemId) return;
    setActiveItemId(firstItemId);
  };

  const resolvedActivePanelIndex = (() => {
    const idx = stackPanels.findIndex((panel) =>
      panel.items.some((item) => item.id === activeItemId)
    );
    return idx === -1 ? 0 : idx;
  })();

  return (
    <section className="relative overflow-hidden bg-cloud-gray py-[3vh] md:py-[10vh]">
      <Container className="relative flex flex-col">
        <header className="flex flex-col items-center text-center">
          <Text as="h2">
            One
            <Text
              as="span"
              textColor="primary"
              variant="h2"
              className="mr-0 md:mr-0 max-w-4xl"
            >
              Vertical Stack
            </Text>
            . Silicon to endpoint.
          </Text>
          <Text as="h6" textColor="black/82" className="mt-2.5">
            Deploy AI on infrastructure designed for scale, resilience, and
            speed.
          </Text>
        </header>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-12.5">
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

          <StackLayers
            activeIndex={resolvedActivePanelIndex}
            count={stackPanels.length}
            layers={stackPanels.map((panel) => ({ title: panel.title }))}
            onSelectLayer={handleSelectPanel}
          />

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
