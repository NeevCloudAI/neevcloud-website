import { Text } from "@/shared/ui-lib";
import { PROVIDER_COMPARISON_TABLE_CELL_CLASS } from "../../constants/provider-comparison-section.constants";
import type { ProviderComparisonRow } from "../../types/provider-comparison-section.types";

type ProviderComparisonTableRowProps = {
  row: ProviderComparisonRow;
};

const ProviderComparisonTableRow = ({
  row,
}: ProviderComparisonTableRowProps) => {
  return (
    <tr className="border-b border-black-7">
      <td className={PROVIDER_COMPARISON_TABLE_CELL_CLASS}>
        <Text
          as="h6"
          textColor={row.isPrimary ? "primary-105" : "white"}
          fontFamily="spaceMono"
        >
          {row.provider}
        </Text>
      </td>
      <td className={PROVIDER_COMPARISON_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.gpuCompute}
        </Text>
      </td>
      <td className={PROVIDER_COMPARISON_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.storage}
        </Text>
      </td>
      <td className={PROVIDER_COMPARISON_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.dataTransfer}
        </Text>
      </td>
      <td className={PROVIDER_COMPARISON_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.inferenceApi}
        </Text>
      </td>
      <td className={PROVIDER_COMPARISON_TABLE_CELL_CLASS}>
        <div className="flex items-center gap-2">
          <Text
            as="h6"
            fontFamily="spaceMono"
            textColor={row.isPrimary ? "red-50" : "white"}
          >
            {row.total}
          </Text>
          {row.savingsLabel ? (
            <Text as="small" fontFamily="spaceMono" textColor="primary-60">
              {row.savingsLabel}
            </Text>
          ) : null}
        </div>
      </td>
    </tr>
  );
};

export default ProviderComparisonTableRow;
