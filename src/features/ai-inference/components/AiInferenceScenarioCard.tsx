import { Text } from "@/shared/ui-lib";
import type { AiInferenceScenarioItem } from "../types/scenarios-section.types";

type AiInferenceScenarioCardProps = {
  item: AiInferenceScenarioItem;
};

const AiInferenceScenarioCard = ({ item }: AiInferenceScenarioCardProps) => {
  const Icon = item.icon;

  return (
    <article className="flex h-full flex-col rounded-md bg-white p-5">
      <div className="w-fit rounded-md bg-primary/15 p-3.5">
        <Icon className="size-[22px] text-primary" aria-hidden="true" />
        <span className="sr-only">{item.iconLabel}</span>
      </div>
      <Text as="h3" weight="semibold" className="mt-5 md:mt-7.5">
        {item.title}
      </Text>
      <Text as="h6" textColor="black/82" className="mt-5">
        {item.description}
      </Text>
      <ul className="mt-5 flex list-none flex-wrap gap-1 p-0">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-primary-170 px-2 py-1 font-mono text-xs text-black/82"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default AiInferenceScenarioCard;
