import { Text } from "@/shared/ui-lib";
import { TOKEN_PRICING_TABLE_CELL_CLASS } from "../../constants/token-pricing-section.constants";
import { TokenPricingRow } from "../../types/token-pricing-section.types";

type TokenPricingTableRowProps = {
  row: TokenPricingRow;
};

const TokenPricingTableRow = ({ row }: TokenPricingTableRowProps) => {
  return (
    <tr className="border-b border-white/6">
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" textColor="primary-105" fontFamily="spaceMono">
          {row.model.title}
        </Text>
        <Text fontFamily="spaceMono" as="small" textColor="gray-80">
          {row.model.description}
        </Text>
      </td>
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-04">
          {row.params}
        </Text>
      </td>
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-04">
          {row.context}
        </Text>
      </td>
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary">
          {row.input}
        </Text>
      </td>
      <td className={TOKEN_PRICING_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="pulse-red">
          {row.output}
        </Text>
      </td>
    </tr>
  );
};

export default TokenPricingTableRow;
