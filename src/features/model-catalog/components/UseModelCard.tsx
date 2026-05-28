import { cn } from "@/lib/utils";
import type { UseModelCardProps } from "@/shared/types/use-model-card.types";
import { Button, Divider, Text } from "@/shared/ui-lib";

const CTA_BUTTON_CLASS: Record<
  UseModelCardProps["card"]["ctaVariant"],
  string
> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  black: "bg-black text-white hover:bg-black/90",
  outline: "bg-white text-black border border-gray-60 hover:border-black",
};

const UseModelCard = ({ card }: UseModelCardProps) => {
  const { title, description, features, ctaLabel, ctaVariant, footnote } = card;

  return (
    <article
      className={
        "flex flex-col bg-white rounded-lg p-6 md:px-5 md:py-7.5 h-full"
      }
    >
      <Text as="h4" weight="semibold" textColor="black">
        {title}
      </Text>
      <Text textColor="gray-85" className="mt-1.25">
        {description}
      </Text>

      <Divider orientation="horizontal" className="bg-gray-60 my-4 md:my-5" />

      <dl className="flex flex-col gap-2.5 m-0">
        {features.map((feature) => (
          <div
            key={feature.label}
            className="flex items-center justify-between gap-4"
          >
            <Text as="dt" textColor="gray-75">
              {feature.label}
            </Text>
            <Text
              as="dd"
              weight="medium"
              textColor={feature.highlighted ? "primary" : "black"}
              className="m-0"
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
          "mt-6 md:mt-7.5 w-full text-center",
          CTA_BUTTON_CLASS[ctaVariant],
        )}
      >
        {ctaLabel}
      </Button>

      <Text as="small" align="center" textColor="gray-85" className="mt-2.5">
        {footnote}
      </Text>
    </article>
  );
};

export default UseModelCard;
