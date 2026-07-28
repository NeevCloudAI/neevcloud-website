import { cn } from "@/lib/utils";
import type { ModelActionSidebarCardProps } from "../../types/model-action-section.types";
import { Button, Text } from "@/shared/ui-lib";

const ModelActionSidebarCard = ({
  model,
  isActive,
  onSelect,
}: ModelActionSidebarCardProps) => {
  return (
    <Button
      variant="ghost"
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={cn(
        "md:min-w-100 w-full rounded-md border px-3.75 py-2.5 text-left",
        isActive
          ? "border-primary-90/18 bg-primary-90/12"
          : "border-gray-80/18 bg-gray-80/12",
      )}
    >
      <Text
        fontFamily="spaceMono"
        textColor={isActive ? "primary" : "gray-04"}
        className="truncate"
      >
        {model.name}
      </Text>
      <Text
        as="small"
        fontFamily="spaceMono"
        textColor="gray-04"
        className="text-[10px]"
      >
        {model.provider} · {model.context} context
      </Text>
      <Text
        as="small"
        fontFamily="spaceMono"
        textColor="gray-04"
        className="text-[10px]"
      >
        {model.pricing}
      </Text>
    </Button>
  );
};

export default ModelActionSidebarCard;
