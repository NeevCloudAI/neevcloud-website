import { LinkComponent, Text } from "@/shared/ui-lib";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import { CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS } from "../constants/transparent-pricing-section.constants";
import type { CpuTransparentPricingTableRowProps } from "../types/transparent-pricing-section.types";

const CpuTransparentPricingTableRow = ({
  row,
  os,
}: CpuTransparentPricingTableRowProps) => {
  const price =
    os === "linux" ? row.linuxPriceMonthly : row.windowsPriceMonthly;

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
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.storage}
        </Text>
      </td>
      <td className={CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary">
          {`${price.toFixed(2)} INR/Monthly`}
        </Text>
      </td>
      <td className={CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <LinkComponent href={EXTERNAL_LINKS.signup} target="_blank">
          Deploy
        </LinkComponent>
      </td>
    </tr>
  );
};

export default CpuTransparentPricingTableRow;
