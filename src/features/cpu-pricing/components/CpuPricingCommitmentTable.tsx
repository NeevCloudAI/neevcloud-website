import { Text } from "@/shared/ui-lib";
import {
  CPU_PRICING_COMMITMENT_TABLE_HEADERS,
  CPU_PRICING_TABLE_CELL_CLASS,
} from "../constants/cpu-pricing-terminal.constants";
import type { CpuPricingFamily } from "../types/cpu-pricing-terminal.types";

type CpuPricingCommitmentTableProps = {
  family: CpuPricingFamily;
};

const CpuPricingCommitmentTable = ({
  family,
}: CpuPricingCommitmentTableProps) => {
  return (
    <div className="rounded-md border border-gray-95 bg-primary-140 p-4 md:p-5 mt-4 md:mt-5">
      <Text as="h6" fontFamily="spaceMono" textColor="white">
        <Text as="span" fontFamily="spaceMono" textColor="primary-105">
          →
        </Text>
        {` Commitment Discounts`}
      </Text>
      <Text as="h6" textColor="gray-80" className="mt-1" fontFamily="spaceMono">
        {family.commitmentSubtitle}
      </Text>

      <div className="mt-5">
        <table
          className="w-full font-space-mono"
          aria-label={`${family.titleName} commitment discounts`}
        >
          <caption className="sr-only">
            Commitment discount tiers for {family.titleName}
          </caption>
          <thead>
            <tr className="border-b border-black-30">
              {CPU_PRICING_COMMITMENT_TABLE_HEADERS.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className={`${CPU_PRICING_TABLE_CELL_CLASS} font-normal`}
                >
                  <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
                    {header}
                  </Text>
                </th>
              ))}
              <th
                scope="col"
                className={`${CPU_PRICING_TABLE_CELL_CLASS} font-normal`}
              >
                <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
                  {family.commitmentExampleLabel}
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {family.commitmentRows.map((row) => (
              <tr
                key={`${family.id}-${row.commitment}`}
                className="border-b border-black-7"
              >
                <td className={CPU_PRICING_TABLE_CELL_CLASS}>
                  <Text as="h6" fontFamily="spaceMono" textColor="primary-105">
                    {row.commitment}
                  </Text>
                </td>
                <td className={CPU_PRICING_TABLE_CELL_CLASS}>
                  <Text as="h6" fontFamily="spaceMono" textColor="white">
                    {row.discount}
                  </Text>
                </td>
                <td className={CPU_PRICING_TABLE_CELL_CLASS}>
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

export default CpuPricingCommitmentTable;
