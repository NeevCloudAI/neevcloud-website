import { Button, Text } from "@/shared/ui-lib";
import { CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS } from "../constants/transparent-pricing-section.constants";
import type { CpuTransparentPricingTableRowProps } from "../types/transparent-pricing-section.types";
import { ArrowRight } from "@/shared/icons/lucide-icon-map";

const CpuTransparentPricingTableRow = ({
  row,
}: CpuTransparentPricingTableRowProps) => {
  return (
    <tr className="group border-b border-black-29">
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
          {row.pricePerHour}
        </Text>
      </td>
      <td
        className={`${CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS} flex items-center justify-between`}
      >
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.bestFor}
        </Text>
        <Button
          size="xs"
          variant="ghost"
          backgroundColor="transparent"
          textColor="primary"
          spacing="none"
          borderRadius="xs"
          className="border border-primary-70 font-space-mono flex items-center gap-3.5 rounded-md text-white px-3 py-1 bg-primary-150 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        >
          Deploy
          <ArrowRight size={18} className="text-primary" />
        </Button>
      </td>
    </tr>
  );
};

export default CpuTransparentPricingTableRow;
