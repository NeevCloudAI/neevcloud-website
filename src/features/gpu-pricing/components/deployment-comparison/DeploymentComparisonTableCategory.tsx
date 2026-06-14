import { Divider, Text } from "@/shared/ui-lib";
import type { DeploymentComparisonTableCategoryProps } from "../../types/deployment-comparison-section.types";
import DeploymentComparisonTableRow from "./DeploymentComparisonTableRow";

const DeploymentComparisonTableCategory = ({
  category,
}: DeploymentComparisonTableCategoryProps) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-2">
        <Text
          as="small"
          textColor="white"
          fontFamily="spaceMono"
          className="text-cloud-gray/60"
        >
          {category.label}
        </Text>
        <Divider orientation="horizontal" className="bg-primary/14" />
      </div>

      <div className="flex flex-col gap-2">
        {category.rows.map((row) => (
          <DeploymentComparisonTableRow key={row.id} row={row} />
        ))}
      </div>
    </div>
  );
};

export default DeploymentComparisonTableCategory;
