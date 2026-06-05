import { Text } from "@/shared/ui-lib";
import { GPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS } from "../constants/transparent-pricing-section.constants";
import type { GpuTransparentPricingTableRowProps } from "../types/transparent-pricing-section.types";

const GpuTransparentPricingTableRow = ({
  row,
}: GpuTransparentPricingTableRowProps) => {
  return (
    <tr className="border-b border-black-29">
      <td className={GPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary">
          {row.gpuType}
        </Text>
      </td>
      <td className={GPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.memory}
        </Text>
      </td>
      <td className={GPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary">
          {row.pricePerHour}
        </Text>
      </td>
      <td className={GPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.typicalWorkload}
        </Text>
      </td>
    </tr>
  );
};

export default GpuTransparentPricingTableRow;
