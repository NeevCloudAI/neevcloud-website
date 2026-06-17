import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import { CircleCheckBig } from "lucide-react";
import type { DeploymentComparisonTableCellProps } from "../../types/deployment-comparison-section.types";

const CELL_VARIANT_STYLES = {
  default: "bg-white/7 border-white/12",
  "container-highlight": "bg-primary-210/8 border-primary-210/25",
  "vm-highlight": "bg-primary/8 border-primary/25",
} as const;

const COLUMN_TEXT_STYLES = {
  container: {
    mobileLabel: "text-primary-210/55",
    text: "text-primary-210",
    subtext: "text-primary-210",
    check: "text-primary-210",
  },
  vm: {
    mobileLabel: "text-primary/55",
    text: "text-primary",
    subtext: "text-primary",
    check: "text-primary",
  },
} as const;

const DeploymentComparisonTableCell = ({
  cell,
  column,
  mobileLabel,
}: DeploymentComparisonTableCellProps) => {
  const variant = cell.variant ?? "default";
  const columnStyles = COLUMN_TEXT_STYLES[column];
  const isHighlight = variant !== "default";

  return (
    <div
      className={cn(
        "w-full rounded-lg border p-4",
        CELL_VARIANT_STYLES[variant],
        isHighlight ? "flex flex-col gap-1.5" : "flex items-center",
      )}
    >
      {mobileLabel ? (
        <Text
          as="small"
          weight="medium"
          fontFamily="spaceMono"
          className={cn("md:hidden", columnStyles.mobileLabel)}
        >
          {mobileLabel}
        </Text>
      ) : null}
      <Text
        as="small"
        fontFamily="spaceMono"
        textColor={isHighlight ? undefined : "cloud-gray"}
        weight={isHighlight ? undefined : "medium"}
        className={cn(
          isHighlight && columnStyles.text,
          !isHighlight && "text-cloud-gray",
        )}
      >
        {cell.text}
      </Text>
      {cell.subtext ? (
        <Text
          as="small"
          fontFamily="spaceMono"
          className={cn(
            "flex items-center gap-2",
            columnStyles.subtext,
            !cell.showCheck && "mt-1.5",
          )}
        >
          {cell.showCheck ? (
            <CircleCheckBig
              aria-hidden="true"
              className={cn("size-2.25", columnStyles.check)}
            />
          ) : null}
          {cell.subtext}
        </Text>
      ) : null}
    </div>
  );
};

export default DeploymentComparisonTableCell;
