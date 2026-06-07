import { ArrowRight } from "@/shared/icons/lucide-icon-map";
import { Text } from "@/shared/ui-lib";
import {
  GPU_MODEL_ANNUAL_SAVINGS_HEADERS,
  GPU_MODEL_PRICING_TABLE_CELL_CLASS,
} from "../constants/model-transparent-pricing-section.constants";
import type { GpuModelTransparentPricingAnnualSavingsCardProps } from "../types/model-transparent-pricing-section.types";

const GpuModelTransparentPricingAnnualSavingsCard = ({
  family,
}: GpuModelTransparentPricingAnnualSavingsCardProps) => {
  return (
    <div className="rounded-md border border-white-10 bg-black-25 p-4 md:p-5">
      <div className="flex items-start gap-3.5">
        <ArrowRight size={18} className="text-primary mt-0.75" />
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {family.annualSavingsLabel}
        </Text>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table
          className="min-w-3xl w-full border-collapse"
          aria-label={`${family.sidebarLabel} annual savings`}
        >
          <caption className="sr-only">
            Annual savings comparison for {family.sidebarLabel}
          </caption>
          <thead>
            <tr className="border-b border-black-29">
              {GPU_MODEL_ANNUAL_SAVINGS_HEADERS.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className={`${GPU_MODEL_PRICING_TABLE_CELL_CLASS} font-normal`}
                >
                  <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
                    {header}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                <Text as="h6" fontFamily="spaceMono" textColor="primary">
                  {family.onDemandPerYear}
                </Text>
              </td>
              <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                <Text as="h6" fontFamily="spaceMono" textColor="white">
                  {family.reservedPerYear}
                </Text>
              </td>
              <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                <Text as="h6" fontFamily="spaceMono" textColor="white">
                  {family.youSave}
                </Text>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GpuModelTransparentPricingAnnualSavingsCard;
