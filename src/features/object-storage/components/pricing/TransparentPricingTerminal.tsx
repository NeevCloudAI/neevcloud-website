import { Divider, Text } from "@/shared/ui-lib";
import { TRANSPARENT_PRICING_TERMINAL_ROWS } from "../../data/transparent-pricing-section.data";
import { EGRESS_PRICE_LABEL } from "../../constants/storage-pricing-calculator.constants";
import TransparentPricingRow from "./TransparentPricingRow";
import TransparentPricingTerminalHeader from "./TransparentPricingTerminalHeader";

const TransparentPricingTerminal = () => {
  return (
    <div
      className="w-full rounded-md bg-black shadow-sm"
      role="region"
      aria-label="Object storage pricing terminal"
    >
      <TransparentPricingTerminalHeader />

      <div className="p-4 md:px-3.75 md:py-7.5">
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {`> object storage list --pricing --currency=INR`}
        </Text>

        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor="gray-04"
          className="mt-1.25"
        >
          {`// free data transfer within India • S3 API compatibility`}
        </Text>

        <div className="mt-4 md:mt-7.25 flex items-center justify-between gap-2.5">
          <Text
            as="h6"
            fontFamily="spaceMono"
            textColor="gray-04"
            className="px-4.75"
          >
            Tier
          </Text>
          <Text as="h6" fontFamily="spaceMono" textColor="gray-04">
            price/gb/month
          </Text>
        </div>

        <Divider orientation="horizontal" className="my-5 bg-white/12" />

        {TRANSPARENT_PRICING_TERMINAL_ROWS.map((row) => (
          <TransparentPricingRow
            key={row.tier}
            label={row.tier}
            value={row.price}
          />
        ))}

        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor="gray-03"
          className="mt-3.75 px-4.75"
        >
          {`Egress: ${EGRESS_PRICE_LABEL}`}
        </Text>
      </div>
    </div>
  );
};

export default TransparentPricingTerminal;
