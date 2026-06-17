import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import type {
  StatsByNumbersCardProps,
  StatsByNumbersItem,
} from "@/shared/types/stats-by-numbers.types";

const ACCENT_LINE_CLASSES: Record<
  NonNullable<StatsByNumbersItem["accentLine"]>["color"],
  string
> = {
  primary: "bg-primary",
  "primary-muted": "bg-gray-05",
  gray: "bg-gray-04",
  red: "bg-pulse-red",
  white: "bg-white",
};

const StatsByNumbersCard = ({ item, className }: StatsByNumbersCardProps) => {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-md border border-white/12 bg-white/6 backdrop-blur-md p-4 md:px-7.5 md:py-10",
        className,
      )}
    >
      <Text as="h6" textColor="gray-03">
        {item.label}
      </Text>
      <Text
        as="h1"
        textColor="white"
        weight="semibold"
        className="mt-2.5 text-[2.5rem] md:text-[3.5rem]"
      >
        {item.value}
      </Text>
      <Text as="h6" textColor="cloud-gray">
        {item.description}
      </Text>
      {item.accentLine ? (
        <div
          className={cn(
            "mt-auto pt-4",
            item.accentLine.dashed
              ? "border-b-6 border-dashed border-primary"
              : "",
          )}
          aria-hidden="true"
        >
          {!item.accentLine.dashed ? (
            <div
              className={cn(
                "h-1.5 w-full rounded-full",
                ACCENT_LINE_CLASSES[item.accentLine.color],
              )}
            />
          ) : null}
        </div>
      ) : null}
    </article>
  );
};

export default StatsByNumbersCard;
