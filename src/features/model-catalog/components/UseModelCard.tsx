import { cn } from "@/lib/utils";
import { Button, Divider, Text } from "@/shared/ui-lib";
import type {
  UseModelCardProps,
  UseModelCardVariant,
} from "@/shared/types/use-model-card.types";

const CTA_BUTTON_CLASS: Record<UseModelCardVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  black: "bg-black text-white hover:bg-black/90",
  outline: "bg-white text-black border border-gray-60 hover:border-black",
};

const UseModelCard = ({ card }: UseModelCardProps) => {
  const { title, description, features, ctaLabel, ctaVariant, footnote } = card;

  return (
    <article className={"flex flex-col bg-white rounded-lg p-6 md:p-8 h-full"}>
      <Text as="h3" weight="semibold" textColor="black">
        {title}
      </Text>
      <Text textColor="gray-85" className="mt-2">
        {description}
      </Text>

      <Divider orientation="horizontal" className="bg-gray-60 my-4 md:my-6" />

      <dl className="flex flex-col gap-3 md:gap-4">
        {features.map((feature) => (
          <div
            key={feature.label}
            className="flex items-center justify-between gap-4"
          >
            <Text textColor="gray-85">{feature.label}</Text>
            <Text
              weight="medium"
              textColor={feature.highlighted ? "primary" : "black"}
            >
              {feature.value}
            </Text>
          </div>
        ))}
      </dl>

      <Button
        size="md"
        weight="semibold"
        className={cn(
          "mt-6 md:mt-8 w-full text-center",
          CTA_BUTTON_CLASS[ctaVariant]
        )}
      >
        {ctaLabel}
      </Button>

      <Text as="small" align="center" textColor="gray-85" className="mt-3">
        {footnote}
      </Text>
    </article>
  );
};

export default UseModelCard;
