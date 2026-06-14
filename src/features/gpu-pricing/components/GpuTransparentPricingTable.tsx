import { ArrowRight } from "@/shared/icons/lucide-icon-map";
import { Text } from "@/shared/ui-lib";
import {
  GPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS,
  GPU_TRANSPARENT_PRICING_TABLE_HEADERS,
} from "../constants/transparent-pricing-section.constants";
import type { GpuTransparentPricingTableProps } from "../types/transparent-pricing-section.types";
import GpuTransparentPricingTableRow from "./GpuTransparentPricingTableRow";

const GpuTransparentPricingTable = ({
  family,
}: GpuTransparentPricingTableProps) => {
  return (
    <div
      id={`${family.id}-panel`}
      role="tabpanel"
      aria-labelledby={`${family.id}-tab`}
      className="h-100 min-w-0 flex-1 overflow-auto rounded-md border border-white/12 bg-gray-80/18 p-4 md:p-5"
    >
      <div className="flex items-start gap-3.5">
        <ArrowRight size={18} className="text-primary mt-0.75" />
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {` configuration: ${family.titleName}`}
        </Text>
      </div>
      <Text as="h6" textColor="gray-80" className="mt-1" fontFamily="spaceMono">
        {family.subtitle}
      </Text>

      <div className="mt-5 overflow-x-auto classy">
        <table
          className="min-w-4xl w-full border-collapse"
          aria-label={`${family.sidebarLabel} GPU configuration pricing`}
        >
          <caption className="sr-only">
            GPU configurations and hourly pricing for {family.sidebarLabel}
          </caption>
          <thead>
            <tr className="border-b border-white/12">
              {GPU_TRANSPARENT_PRICING_TABLE_HEADERS.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className={`${GPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS} font-normal`}
                >
                  <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
                    {header}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {family.rows.map((row) => (
              <GpuTransparentPricingTableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>

      <Text
        as="h6"
        textColor="gray-80"
        className="mt-7.5"
        fontFamily="spaceMono"
      >
        {family.footer}
      </Text>
    </div>
  );
};

export default GpuTransparentPricingTable;
