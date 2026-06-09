import { cn } from "@/lib/utils";
import ModelInfoDetails from "@/shared/components/ModelInfoDetails";
import { Button, Divider, Text } from "@/shared/ui-lib";
import type { ModelInfoCardProps } from "@/shared/types/model-info-card.types";
import LinkComponent from "../ui-lib/link";

const ModelInfoCard = ({ model, className }: ModelInfoCardProps) => {
  const {
    name,
    provider,
    latency,
    bestFor,
    metrics,
    capabilities,
    useCases,
    primaryActionLabel,
    primaryActionHref,
    primaryActionTarget,
    secondaryActionLabel,
    secondaryActionHref,
    secondaryActionTarget,
    tertiaryActionLabel,
    tertiaryActionHref,
    tertiaryActionTarget,
  } = model;

  return (
    <article
      className={cn("flex flex-col bg-gray-10 p-5 rounded-md", className)}
    >
      <div className="flex items-center justify-between gap-2">
        <Text as="h4" weight="semibold">
          {name}
        </Text>
        <Text
          as="small"
          className="bg-green-20 text-primary px-2.5 py-0.75 rounded-full"
        >
          {latency}
        </Text>
      </div>

      <Text textColor="gray-85" className="mt-1.25">
        {provider}
      </Text>

      <Text textColor="black" className="mt-2.5">
        Best for:
        <Text textColor="gray-90" as="span" variant="p">
          {bestFor}
        </Text>
      </Text>

      <div className="mt-5 grid grid-cols-2 rounded-md border border-gray-60">
        {metrics.map((metric, index) => {
          const isLastRow = index >= metrics.length - 2;
          const isRightColumn = index % 2 === 1;
          return (
            <div
              key={metric.label}
              className={cn(
                "flex flex-col p-4 border-gray-60",
                !isLastRow && "border-b",
                !isRightColumn && "border-r"
              )}
            >
              <Text as="small" textColor="gray-75">
                {metric.label}
              </Text>
              <Text as="h6" textColor="black" weight="medium">
                {metric.value}
              </Text>
            </div>
          );
        })}
      </div>

      <ModelInfoDetails capabilities={capabilities} useCases={useCases} />

      <Divider className="bg-gray-60 mt-7.5 mb-5" orientation="horizontal" />

      <div className="flex flex-wrap justify-between gap-1">
        <LinkComponent
          href={primaryActionHref ?? ""}
          target={primaryActionTarget ?? ""}
        >
          {primaryActionLabel}
        </LinkComponent>
        <LinkComponent
          href={secondaryActionHref ?? ""}
          target={secondaryActionTarget ?? ""}
          variant="outline-gray"
        >
          {secondaryActionLabel}
        </LinkComponent>
        <LinkComponent
          href={tertiaryActionHref ?? ""}
          target={tertiaryActionTarget ?? ""}
          variant="outline-gray"
        >
          {tertiaryActionLabel}
        </LinkComponent>
      </div>
    </article>
  );
};

export default ModelInfoCard;
