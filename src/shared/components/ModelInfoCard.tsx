import { cn } from "@/lib/utils";
import { Button, Divider, Text } from "@/shared/ui-lib";
import type { ModelInfoCardProps } from "@/shared/types/model-info-card.types";

const ModelInfoCard = ({ model, className }: ModelInfoCardProps) => {
  const {
    name,
    provider,
    latency,
    bestFor,
    metrics,
    capabilitiesLabel = "+ Show capabilities & use cases",
    primaryActionLabel = "Try in playground",
    secondaryActionLabel = "View Full Docs",
    tertiaryActionLabel = "Get API Key",
  } = model;

  return (
    <article
      className={cn(
        "flex flex-col justify-center bg-gray-10 p-4 rounded-md",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <Text as="h4" weight="semibold">
          {name}
        </Text>
        <Text
          as="small"
          className="bg-green-20 text-primary px-3 py-1 rounded-full"
        >
          {latency}
        </Text>
      </div>

      <Text textColor="gray-85" className="mt-2">
        {provider}
      </Text>

      <Text textColor="black" className="mt-2">
        Best for:
        <Text textColor="gray-90" as="span" variant="p">
          {bestFor}
        </Text>
      </Text>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 rounded-md border border-gray-60">
        {metrics.map((metric, index) => {
          const isLastRow = index >= metrics.length - 2;
          const isRightColumn = index % 2 === 1;
          return (
            <div
              key={metric.label}
              className={cn(
                "flex flex-col p-4 border-gray-60",
                !isLastRow && "border-b",
                !isRightColumn && "md:border-r"
              )}
            >
              <Text as="small" textColor="gray-75">
                {metric.label}
              </Text>
              <Text textColor="black" weight="medium">
                {metric.value}
              </Text>
            </div>
          );
        })}
      </div>

      <Text textColor="primary" className="mt-4">
        {capabilitiesLabel}
      </Text>

      <Divider className="bg-gray-60 my-4" orientation="horizontal" />

      <div className="flex flex-wrap gap-2">
        <Button>{primaryActionLabel}</Button>
        <Button variant="ghost" className="border border-gray-85 text-gray-85">
          {secondaryActionLabel}
        </Button>
        <Button variant="ghost" className="border border-gray-85 text-gray-85">
          {tertiaryActionLabel}
        </Button>
      </div>
    </article>
  );
};

export default ModelInfoCard;
