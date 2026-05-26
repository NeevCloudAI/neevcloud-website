import Link from "next/link";
import RightModelPricingTableRow from "@/features/model-catalog/components/right-model/RightModelPricingTableRow";
import {
  MODEL_PRICING_SKU_COUNT,
  RIGHT_MODEL_TABLE_CELL_CLASS,
  RIGHT_MODEL_TABLE_HEADERS,
} from "@/features/model-catalog/constants/right-model-section.constants";
import { MODEL_PRICING_ROWS } from "@/features/model-catalog/data/right-model-section.data";
import { Text } from "@/shared/ui-lib";

const RightModelPricingTable = () => {
  return (
    <div className="min-h-120 overflow-y-auto px-3.75 py-5 md:py-7.5">
      <Text
        as="h6"
        fontFamily="spaceMono"
        textColor="white"
        className="leading-7"
      >
        {`> model list --pricing --currency=INR`}
      </Text>
      <Text
        as="h6"
        textColor="gray-80"
        fontFamily="spaceMono"
        className="leading-7"
      >
        {`// fetched ${MODEL_PRICING_SKU_COUNT} SKUs • sorted by input/output tokens • *all price ₹/1M tokens`}
      </Text>

      <div className="mt-7.5 overflow-x-auto">
        <table className="w-full min-w-272 font-space-mono">
          <caption className="sr-only">
            Model pricing comparison table
          </caption>
          <thead>
            <tr className="border-b border-black-30">
              {RIGHT_MODEL_TABLE_HEADERS.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className={`${RIGHT_MODEL_TABLE_CELL_CLASS} font-normal`}
                >
                  <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
                    {header.name}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MODEL_PRICING_ROWS.map((row) => (
              <RightModelPricingTableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6.25 flex justify-end">
        <Link
          href="#"
          className="font-space-mono text-sm text-primary underline underline-offset-4"
        >
          Load more Models
        </Link>
      </div>
    </div>
  );
};

export default RightModelPricingTable;
