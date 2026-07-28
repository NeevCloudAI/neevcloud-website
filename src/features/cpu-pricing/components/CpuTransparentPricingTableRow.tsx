import { Text } from "@/shared/ui-lib";
import { CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS } from "../constants/transparent-pricing-section.constants";
import type { CpuTransparentPricingTableRowProps } from "../types/transparent-pricing-section.types";

const CpuTransparentPricingTableRow = ({
  row,
}: CpuTransparentPricingTableRowProps) => {
  return (
    <tr className="border-b border-white/12">
      <td className={CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.name}
        </Text>
      </td>
      <td className={CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.vcpus}
        </Text>
      </td>
      <td className={CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.ram}
        </Text>
      </td>
      <td className={CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary">
          {row.priceOnDemand}
        </Text>
      </td>
      <td className={CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.price3Month ?? "—"}
        </Text>
      </td>
      <td className={CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.price6Month ?? "—"}
        </Text>
      </td>
      <td className={CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.price1Year ?? "—"}
        </Text>
      </td>
      <td className={CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.bestFor}
        </Text>
      </td>
    </tr>
  );
};

export default CpuTransparentPricingTableRow;
