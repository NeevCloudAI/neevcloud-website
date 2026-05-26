import { Text } from "@/shared/ui-lib";
import { TOKEN_PRICING_TABLE_CELL_CLASS } from "@/features/serverless-inference/constants/token-pricing-section.constants";
import type { TokenPricingRow } from "@/features/serverless-inference/types/token-pricing-section.types";

type TokenPricingTableRowProps = {
  row: TokenPricingRow;
};

const TokenPricingTableRow = ({ row }: TokenPricingTableRowProps) => {
  return (
    <tr className="border-b border-black-7">
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" textColor="primary-105" fontFamily="spaceMono">
          {row.model.title}
        </Text>
        <Text fontFamily="spaceMono" as="small" textColor="gray-80">
          {row.model.description}
        </Text>
      </td>
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-75">
          {row.params}
        </Text>
      </td>
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-75">
          {row.context}
        </Text>
      </td>
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary">
          {row.input}
        </Text>
      </td>
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="red-50">
          {row.output}
        </Text>
      </td>
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor={row.free ? "orange-50" : "white"}
        >
          {row.free || "-"}
        </Text>
      </td>
    </tr>
  );
};

export default TokenPricingTableRow;
