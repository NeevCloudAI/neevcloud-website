import { Text } from "@/shared/ui-lib";
import type { DeploymentComparisonTableRowProps } from "../../types/deployment-comparison-section.types";
import DeploymentComparisonIcon from "./DeploymentComparisonIcon";
import DeploymentComparisonTableCell from "./DeploymentComparisonTableCell";

const DeploymentComparisonTableRow = ({
  row,
}: DeploymentComparisonTableRowProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      <div className="flex w-full items-center gap-3 rounded-lg border border-primary/14 bg-blue-10 p-4">
        <div className="rounded-lg bg-blue-20 p-1.5">
          <DeploymentComparisonIcon
            name={row.icon}
            className="size-3 text-cloud-gray/40"
          />
        </div>
        <Text
          as="small"
          textColor="cloud-gray"
          weight="medium"
          fontFamily="spaceMono"
        >
          {row.label}
        </Text>
      </div>

      <DeploymentComparisonTableCell
        cell={row.container}
        column="container"
        mobileLabel="CONTAINER"
      />
      <DeploymentComparisonTableCell
        cell={row.vm}
        column="vm"
        mobileLabel="FULL OS"
      />
    </div>
  );
};

export default DeploymentComparisonTableRow;
