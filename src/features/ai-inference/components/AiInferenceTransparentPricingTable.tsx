import { Text } from "@/shared/ui-lib";
import { AI_INFERENCE_TRANSPARENT_PRICING_TABLE_CELL_CLASS } from "../constants/transparent-pricing-section.constants";
import type { AiInferenceTransparentPricingTableProps } from "../types/transparent-pricing-section.types";
import AiInferenceTransparentPricingTableRow from "./AiInferenceTransparentPricingTableRow";
import { ArrowRight } from "@/shared/icons/lucide-icon-map";

const AiInferenceTransparentPricingTable = ({
  family,
}: AiInferenceTransparentPricingTableProps) => {
  return (
    <div
      id={`${family.id}-panel`}
      role="tabpanel"
      aria-labelledby={`${family.id}-tab`}
      className="classy h-100 overflow-auto min-w-0 flex-1 rounded-md border border-white-10 bg-black-25 p-4 md:p-5"
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

      <div className="mt-5">
        <table
          className="min-w-4xl w-full border-collapse"
          aria-label={`${family.sidebarLabel} inference pricing`}
        >
          <caption className="sr-only">
            Per-model token pricing for {family.sidebarLabel}
          </caption>
          <thead>
            <tr className="border-b border-black-29">
              {family.tableHeaders.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className={`${AI_INFERENCE_TRANSPARENT_PRICING_TABLE_CELL_CLASS} font-normal`}
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
              <AiInferenceTransparentPricingTableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AiInferenceTransparentPricingTable;
