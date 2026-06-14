import Link from "next/link";
import ModelActionSidebarCard from "./ModelActionSidebarCard";
import { MODEL_ACTION_TOTAL_COUNT } from "../../constants/model-action-section.constants";
import { MODEL_ACTION_ITEMS } from "../../data/model-action-section.data";
import type { ModelActionItem } from "../../types/model-action-section.types";
import { Text } from "@/shared/ui-lib";

type ModelActionSidebarProps = {
  selectedModelId: string;
  onSelectModel: (id: string) => void;
};

const ModelActionSidebar = ({
  selectedModelId,
  onSelectModel,
}: ModelActionSidebarProps) => {
  return (
    <aside
      className="flex shrink-0 flex-col bg-white/6 p-4 md:p-7.5 md:rounded-l-xl"
      aria-label="Model selection"
    >
      <Text
        fontFamily="spaceMono"
        textColor="gray-04"
        className="uppercase tracking-wide"
      >
        Select model
      </Text>

      <ul className="mt-5 flex list-none flex-col gap-1.25 p-0 m-0" role="list">
        {MODEL_ACTION_ITEMS.map((model: ModelActionItem) => (
          <li key={model.id}>
            <ModelActionSidebarCard
              model={model}
              isActive={model.id === selectedModelId}
              onSelect={() => onSelectModel(model.id)}
            />
          </li>
        ))}
      </ul>

      <Link
        href="/model-playground"
        className="mt-4 md:mt-10 font-space-mono text-sm text-primary underline underline-offset-4"
      >
        View All {MODEL_ACTION_TOTAL_COUNT}+ models
      </Link>
    </aside>
  );
};

export default ModelActionSidebar;
