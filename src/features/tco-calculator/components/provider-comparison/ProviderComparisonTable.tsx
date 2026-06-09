import { Text } from "@/shared/ui-lib";
import { PROVIDER_COMPARISON_TABLE_HEADERS } from "../../constants/provider-comparison-section.constants";
import { PROVIDER_COMPARISON_ROWS } from "../../data/provider-comparison-section.data";
import ProviderComparisonTableRow from "./ProviderComparisonTableRow";

const ProviderComparisonTable = () => {
  return (
    <table
      className="w-full font-space-mono"
      aria-label="Provider cost comparison in INR per month"
    >
      <caption className="sr-only">
        Monthly cost breakdown across NeevCloud, AWS, Google Cloud, Azure, and
        Lambda Labs
      </caption>
      <thead>
        <tr className="border-b border-black-30">
          {PROVIDER_COMPARISON_TABLE_HEADERS.map((header) => (
            <th
              key={header.id}
              scope="col"
              className="font-normal px-8.75 py-5"
            >
              <Text
                as="h6"
                fontFamily="spaceMono"
                textColor="gray-80"
                className="w-fit"
              >
                {header.name}
              </Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {PROVIDER_COMPARISON_ROWS.map((row) => (
          <ProviderComparisonTableRow key={row.id} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default ProviderComparisonTable;
