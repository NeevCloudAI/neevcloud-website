import { ArrowRight } from "@/shared/icons/lucide-icon-map";
import { Text } from "@/shared/ui-lib";
import {
  GPU_MODEL_CONFIGURATION_TABLE_HEADERS,
  GPU_MODEL_PRICING_TABLE_CELL_CLASS,
} from "../constants/model-transparent-pricing-section.constants";
import type { GpuModelTransparentPricingConfigurationCardProps } from "../types/model-transparent-pricing-section.types";

const GpuModelTransparentPricingConfigurationCard = ({
  family,
}: GpuModelTransparentPricingConfigurationCardProps) => {
  return (
    <div className="rounded-md border border-white/12 bg-gray-80/18 p-4 md:p-5">
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
          aria-label={`${family.sidebarLabel} configuration pricing`}
        >
          <caption className="sr-only">
            GPU configuration and hourly pricing for {family.sidebarLabel}
          </caption>
          <thead>
            <tr className="border-b border-white/12">
              {GPU_MODEL_CONFIGURATION_TABLE_HEADERS.map((header) => (
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
            {family.configurationRows.map((row) => (
              <tr key={row.id} className="border-b border-white/6">
                <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                  <Text as="h6" fontFamily="spaceMono" textColor="primary">
                    {row.configuration}
                  </Text>
                </td>
                <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                  <Text as="h6" fontFamily="spaceMono" textColor="white">
                    {row.pricePerHour}
                  </Text>
                </td>
                <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                  <Text as="h6" fontFamily="spaceMono" textColor="white">
                    {row.memory}
                  </Text>
                </td>
                <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                  <Text as="h6" fontFamily="spaceMono" textColor="white">
                    {row.bandwidth}
                  </Text>
                </td>
                <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                  <Text as="h6" fontFamily="spaceMono" textColor="white">
                    {row.fp16}
                  </Text>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2.5">
        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor="gray-80"
          className="leading-7"
        >
          {family.useCasesLabel}
        </Text>
        <Text
          as="h6"
          textColor="gray-80"
          className="mt-1"
          fontFamily="spaceMono"
        >
          {family.useCases}
        </Text>
      </div>
    </div>
  );
};

export default GpuModelTransparentPricingConfigurationCard;
