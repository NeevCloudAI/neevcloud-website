import { Text, LinkComponent } from "@/shared/ui-lib";
import { CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS } from "../constants/transparent-pricing-section.constants";
import type { CpuTransparentPricingTableRowProps } from "../types/transparent-pricing-section.types";
import { ArrowRight } from "@/shared/icons/lucide-icon-map";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

const CpuTransparentPricingTableRow = ({
  row,
}: CpuTransparentPricingTableRowProps) => {
  return (
    <tr className="group border-b border-white/12">
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
        <LinkComponent
          href={EXTERNAL_LINKS.signup}
          target="_blank"
          size="xs"
          className="border border-primary-90/40 font-space-mono flex items-center gap-3.5 rounded-md text-white px-3 py-1 bg-primary/10 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        >
          Deploy
          <ArrowRight size={18} className="text-primary" />
        </LinkComponent>
      </td>
    </tr>
  );
};

export default CpuTransparentPricingTableRow;
