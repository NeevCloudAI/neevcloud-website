import { Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import { PURPOSE_LEGEND } from "@/features/managed-kubernetes/data/purpose-section.data";

const PurposeLegend = () => {
  return (
    <ul className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8 md:gap-8">
      {PURPOSE_LEGEND.map((item) => (
        <li key={item.id} className="flex items-center gap-2">
          <span
            className={cn("h-5 w-5 shrink-0 rounded-sm", item.swatchClass)}
            aria-hidden="true"
          />
          <Text textColor="gray-75">{item.label}</Text>
        </li>
      ))}
    </ul>
  );
};

export default PurposeLegend;
