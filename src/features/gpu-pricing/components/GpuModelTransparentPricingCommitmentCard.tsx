import { ArrowRight } from "@/shared/icons/lucide-icon-map";
import { Text } from "@/shared/ui-lib";
import {
  GPU_MODEL_COMMITMENT_TABLE_HEADERS,
  GPU_MODEL_PRICING_TABLE_CELL_CLASS,
} from "../constants/model-transparent-pricing-section.constants";
import type { GpuModelTransparentPricingCommitmentCardProps } from "../types/model-transparent-pricing-section.types";

const GpuModelTransparentPricingCommitmentCard = ({
  family,
}: GpuModelTransparentPricingCommitmentCardProps) => {
  const headers = GPU_MODEL_COMMITMENT_TABLE_HEADERS.map((header) =>
    header === "Example (8x H100)" ? family.commitmentExampleLabel : header,
  );

  return (
    <div className="rounded-md border border-white-10 bg-black-25 p-4 md:p-5">
      <div className="flex items-start gap-3.5">
        <ArrowRight size={18} className="text-primary mt-0.75" />
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          Commitment Discounts
        </Text>
      </div>
      <Text as="h6" textColor="gray-80" className="mt-1" fontFamily="spaceMono">
        {family.commitmentSubtitle}
      </Text>

      <div className="mt-5 overflow-x-auto">
        <table
          className="min-w-3xl w-full border-collapse"
          aria-label={`${family.sidebarLabel} commitment discounts`}
        >
          <caption className="sr-only">
            Commitment discount pricing for {family.sidebarLabel}
          </caption>
          <thead>
            <tr className="border-b border-black-29">
              {headers.map((header) => (
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
            {family.commitmentRows.map((row) => (
              <tr key={row.id} className="border-b border-black-29">
                <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                  <Text as="h6" fontFamily="spaceMono" textColor="primary">
                    {row.commitment}
                  </Text>
                </td>
                <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                  <Text as="h6" fontFamily="spaceMono" textColor="white">
                    {row.discount}
                  </Text>
                </td>
                <td className={GPU_MODEL_PRICING_TABLE_CELL_CLASS}>
                  <Text as="h6" fontFamily="spaceMono" textColor="white">
                    {row.examplePrice}
                  </Text>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GpuModelTransparentPricingCommitmentCard;
