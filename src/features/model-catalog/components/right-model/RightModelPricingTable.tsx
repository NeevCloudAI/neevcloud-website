import {
  MODEL_PRICING_SKU_COUNT,
  RIGHT_MODEL_TABLE_CELL_CLASS,
  RIGHT_MODEL_TABLE_HEADERS,
} from "../../constants/right-model-section.constants";
import { MODEL_PRICING_ROWS } from "../../data/right-model-section.data";
import { Text, LinkComponent } from "@/shared/ui-lib";
import RightModelPricingTableRow from "./RightModelPricingTableRow";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

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

      <div className="mt-7.5 overflow-x-auto classy">
        <table className="w-full min-w-272 font-space-mono">
          <caption className="sr-only">Model pricing comparison table</caption>
          <thead>
            <tr className="border-b border-white/12">
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
        <LinkComponent
          href={EXTERNAL_LINKS.aiInferencePlayground}
          target="_blank"
          variant="ghost"
          fontFamily="spaceMono"
          spacing="none"
          textColor="primary"
          className="underline"
        >
          Load more Models
        </LinkComponent>
      </div>
    </div>
  );
};

export default RightModelPricingTable;
