import { Text } from "@/shared/ui-lib";
import {
  TOKEN_PRICING_TABLE_CELL_CLASS,
  TOKEN_PRICING_TABLE_HEADERS,
} from "../../constants/token-pricing-section.constants";
import { TOKEN_PRICING_ROWS } from "../../data/token-pricing-section.data";
import TokenPricingTableRow from "./TokenPricingTableRow";

const TokenPricingTable = () => {
  return (
    <div className="mt-7.5 overflow-x-auto">
      <table
        className="w-full font-space-mono"
        aria-label="Model inference token pricing in INR"
      >
        <caption className="sr-only">
          Per-model token pricing with input and output rates per million tokens
        </caption>
        <thead>
          <tr className="border-b border-black-30">
            {TOKEN_PRICING_TABLE_HEADERS.map((header) => (
              <th
                key={header.id}
                scope="col"
                className={`${TOKEN_PRICING_TABLE_CELL_CLASS} font-normal`}
              >
                <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
                  {header.name}
                </Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TOKEN_PRICING_ROWS.map((row) => (
            <TokenPricingTableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenPricingTable;
