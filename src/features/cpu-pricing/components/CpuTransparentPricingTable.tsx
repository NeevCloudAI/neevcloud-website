import { Text } from "@/shared/ui-lib";
import {
  CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS,
  CPU_TRANSPARENT_PRICING_TABLE_HEADERS,
} from "../constants/transparent-pricing-section.constants";
import type { CpuTransparentPricingTableProps } from "../types/transparent-pricing-section.types";
import CpuTransparentPricingTableRow from "./CpuTransparentPricingTableRow";
import { ArrowRight } from "@/shared/icons/lucide-icon-map";

const CpuTransparentPricingTable = ({
  activeType,
  activeLabel,
  activeDescription,
  rows,
}: CpuTransparentPricingTableProps) => {
  return (
    <div
      id={`${activeType}-panel`}
      role="tabpanel"
      aria-labelledby={`${activeType}-tab`}
      className="bg-black-25 p-4 md:p-5 rounded-md border border-white-10 h-94 w-full"
    >
      <div className="flex items-start gap-3.5">
        <ArrowRight size={18} className="text-primary mt-0.75" />
        <Text as="h6" fontFamily="spaceMono" textColor="gray-107">
          {activeDescription}
        </Text>
      </div>

      <div className="mt-5">
        <table
          className="min-w-4xl w-full border-collapse"
          aria-label={`${activeLabel} CPU instance pricing`}
        >
          <thead>
            <tr className="border-b border-black-29">
              {CPU_TRANSPARENT_PRICING_TABLE_HEADERS.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className={`${CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS} font-normal`}
                >
                  <Text as="h6" fontFamily="spaceMono" textColor="gray-106">
                    {header}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <CpuTransparentPricingTableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CpuTransparentPricingTable;
