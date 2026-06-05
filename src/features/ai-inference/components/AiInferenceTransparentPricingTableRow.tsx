import { Text } from "@/shared/ui-lib";
import { AI_INFERENCE_TRANSPARENT_PRICING_TABLE_CELL_CLASS } from "../constants/transparent-pricing-section.constants";
import type { AiInferenceTransparentPricingTableRowProps } from "../types/transparent-pricing-section.types";

const AiInferenceTransparentPricingTableRow = ({
  row,
}: AiInferenceTransparentPricingTableRowProps) => {
  return (
    <tr className="border-b border-black-29">
      <td className={AI_INFERENCE_TRANSPARENT_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary">
          {row.model}
        </Text>
      </td>
      {row.cells.map((cell, index) => (
        <td
          key={`${row.id}-${index}`}
          className={AI_INFERENCE_TRANSPARENT_PRICING_TABLE_CELL_CLASS}
        >
          <Text as="h6" fontFamily="spaceMono" textColor="white">
            {cell}
          </Text>
        </td>
      ))}
    </tr>
  );
};

export default AiInferenceTransparentPricingTableRow;
