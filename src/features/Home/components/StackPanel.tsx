"use client";

import { Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import type { StackSectionPanel } from "../types/stack-section.types";

type StackPanelProps = {
  panel: StackSectionPanel;
  className?: string;
  activeItemId: string;
  onToggleItem: (itemId: string) => void;
};

export default function StackPanel({
  panel,
  className,
  activeItemId,
  onToggleItem,
}: StackPanelProps) {
  const isActive = panel.items.some((item) => item.id === activeItemId);

  return (
    <article
      className={cn(
        "flex flex-col rounded-lg p-2 text-gray-05",
        isActive ? "opacity-100" : "opacity-50",
        className
      )}
      aria-labelledby={`stack-panel-${panel.id}-title`}
    >
      <Text as="h3" weight="semibold" id={`stack-panel-${panel.id}-title`}>
        {panel.title}
      </Text>
      <Text as="h6" className="my-2">
        {panel.description}
      </Text>
      <div className="flex flex-col">
        {panel.items.map((item) => (
          <div key={item.id} className="w-full">
            <button
              id={`stack-item-button-${panel.id}-${item.id}`}
              type="button"
              onClick={() => onToggleItem(item.id)}
              className="flex w-full cursor-pointer items-center justify-between border-b border-gray-01 py-3 text-left transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-expanded={activeItemId === item.id}
              aria-controls={`stack-item-content-${panel.id}-${item.id}`}
            >
              <Text as="h6">{item.label}</Text>
              <Text
                as="h3"
                className={cn(
                  "transition-transform duration-200",
                  activeItemId === item.id && "rotate-45"
                )}
                aria-hidden
              >
                +
              </Text>
            </button>

            <div
              id={`stack-item-content-${panel.id}-${item.id}`}
              role="region"
              aria-hidden={activeItemId !== item.id}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                activeItemId === item.id
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
              aria-labelledby={`stack-item-button-${panel.id}-${item.id}`}
            >
              <div className="overflow-hidden">
                <Text className="pt-2 pb-3 text-balance leading-relaxed">
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
