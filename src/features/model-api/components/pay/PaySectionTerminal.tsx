import PaySectionPricingRow from "./PaySectionPricingRow";
import PaySectionTerminalHeader from "./PaySectionTerminalHeader";
import { PAY_SECTION_PRICING_ROWS } from "../../data/pay-section.data";
import { Divider, Text } from "@/shared/ui-lib";

const PaySectionTerminal = () => {
  return (
    <div
      className="bg-white-5 rounded-xl w-full shadow-sm font-mono border border-white-10 backdrop-blur-md"
      aria-label="Model API pricing terminal preview"
    >
      <PaySectionTerminalHeader />

      <div className="px-4 md:px-3.75 py-2 md:py-7.5">
        <Text fontFamily="spaceMono" textColor="white">
          {`> model api list --pricing --currency=INR`}
        </Text>

        <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1">
          {`// fetched 4 models per-requests billing all amounts in ₹`}
        </Text>

        <div className="grid grid-cols-3 items-center gap-2 mt-7.5">
          <Text as="h6" fontFamily="spaceMono" textColor="gray-75" align="left">
            category
          </Text>
          <Text as="h6" fontFamily="spaceMono" textColor="gray-75" align="left">
            Price / request
          </Text>
          <Text as="h6" fontFamily="spaceMono" textColor="gray-75" align="right">
            Pricing
          </Text>
        </div>
        <Divider orientation="horizontal" className="mt-4 bg-black-5" />

        {PAY_SECTION_PRICING_ROWS.map((row) => (
          <PaySectionPricingRow key={row.category} row={row} />
        ))}

        <Text
          fontFamily="spaceMono"
          textColor="gray-75"
          className="mt-7.5"
          as="h6"
        >
          {`// All prices in INR.`}
          <Text
            as="span"
            variant="h6"
            fontFamily="spaceMono"
            textColor="primary"
            className="mt-1"
          >
            Volume discounts kick in at 10M req/mo.
          </Text>
        </Text>
        <Text
          fontFamily="spaceMono"
          textColor="gray-75"
          className="mt-1"
          as="h6"
        >
          {`// Enterprise: committed-use, dedicated capacity.`}
        </Text>
      </div>
    </div>
  );
};

export default PaySectionTerminal;
