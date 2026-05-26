import { Text } from "@/shared/ui-lib";
import { GPU_PRICING_TABLE_CELL_CLASS } from "@/features/gpu-cluster/constants/gpu-pricing-table.constants";
import type { GpuPricingRow } from "@/features/gpu-cluster/types/gpu-pricing-table.types";

type GpuPricingTableRowProps = {
  row: GpuPricingRow;
};

const GpuPricingTableRow = ({ row }: GpuPricingTableRowProps) => {
  return (
    <tr className="border-b border-black-7">
      <td className={GPU_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary-105">
          {row.sku}
        </Text>
      </td>
      <td className={GPU_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
          {row.vram}
        </Text>
      </td>
      <td className={GPU_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
          {row.cpu}
        </Text>
      </td>
      <td className={GPU_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
          {row.ram}
        </Text>
      </td>
      <td className={GPU_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.hourly}
        </Text>
      </td>
      <td className={GPU_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.threeMonths.price}
          <Text
            as="span"
            fontFamily="spaceMono"
            variant="small"
            textColor="primary-105"
            className="ml-2 md:ml-5"
          >
            {`save upto ${row.threeMonths.savePercent}%`}
          </Text>
        </Text>
      </td>
      <td className={GPU_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.sixMonths.price}
          <Text
            as="span"
            fontFamily="spaceMono"
            variant="small"
            textColor="primary-105"
            className="ml-2 md:ml-5"
          >
            {`save upto ${row.sixMonths.savePercent}%`}
          </Text>
        </Text>
      </td>
      <td className={GPU_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.oneYear.price}
          <Text
            as="span"
            fontFamily="spaceMono"
            variant="small"
            textColor="primary-105"
            className="ml-2 md:ml-5"
          >
            {`save upto ${row.oneYear.savePercent}%`}
          </Text>
        </Text>
      </td>
      <td className={GPU_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor={row.status.textVariant}>
          {row.status.text}
        </Text>
      </td>
    </tr>
  );
};

export default GpuPricingTableRow;
