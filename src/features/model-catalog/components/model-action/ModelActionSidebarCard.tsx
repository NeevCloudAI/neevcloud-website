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
          ? "border-primary-75 bg-primary-95"
          : "border-black-35 bg-black-70 hover:border-gray-100",
      )}
    >
      <Text
        fontFamily="spaceMono"
        textColor={isActive ? "primary" : "gray-75"}
        className="truncate"
      >
        {model.name}
      </Text>
      <Text
        as="small"
        fontFamily="spaceMono"
        textColor="gray-75"
        className="text-[10px]"
      >
        {model.provider} · {model.context} context
      </Text>
    </Button>
  );
};

export default ModelActionSidebarCard;
