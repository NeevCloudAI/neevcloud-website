import { Text } from "@/shared/ui-lib";
import {
  CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS,
  CPU_TRANSPARENT_PRICING_TABLE_HEADERS,
} from "../constants/transparent-pricing-section.constants";
import type { CpuTransparentPricingTableProps } from "../types/transparent-pricing-section.types";
import CpuTransparentPricingTableRow from "./CpuTransparentPricingTableRow";

const CpuTransparentPricingTable = ({
  activeType,
  activeLabel,
  activeConfig,
  os,
  rows,
}: CpuTransparentPricingTableProps) => {
  const headers = [
    ...CPU_TRANSPARENT_PRICING_TABLE_HEADERS,
    os === "linux" ? "Linux Price" : "Windows Price",
    "",
  ];

  return (
    <div
      id={`${activeType}-panel`}
      role="tabpanel"
      aria-labelledby={`${activeType}-tab`}
      className="bg-gray-80/18 p-4 md:p-5 rounded-md border border-white/12 h-120 w-full min-w-0"
    >
      <Text as="h6" fontFamily="spaceMono" textColor="white">
        <Text as="span" fontFamily="spaceMono" textColor="primary-105">
          →
        </Text>
        {` configuration: ${activeConfig.title}`}
      </Text>
      <Text as="h6" textColor="white/60" className="mt-1" fontFamily="spaceMono">
        {activeConfig.subtitle}
      </Text>

      <div className="mt-5 overflow-x-auto classy">
        <table
          className="min-w-6xl w-full border-collapse"
          aria-label={`${activeLabel} CPU instance pricing`}
        >
          <thead>
            <tr className="border-b border-white/12">
              {headers.map((header, index) => (
                <th
                  key={`${header}-${index}`}
                  scope="col"
                  className={`${CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS} font-normal`}
                >
                  <Text as="h6" fontFamily="spaceMono" textColor="white/60">
                    {header}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <CpuTransparentPricingTableRow key={row.id} row={row} os={os} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CpuTransparentPricingTable;
