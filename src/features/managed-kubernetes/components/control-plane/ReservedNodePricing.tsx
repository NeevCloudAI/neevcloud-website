import { Divider, Text } from "@/shared/ui-lib";
import ReservedNodePricingTier from "./ReservedNodePricingTier";

const RESERVED_PRICING_TIERS = [
  {
    term: "3 Months",
    discount: "15%",
    description: "vs on-demand · billed monthly",
  },
  {
    term: "6 Months",
    discount: "20%",
    description: "vs on-demand · billed monthly",
  },
  {
    term: "12 Months",
    discount: "23%",
    description: "vs on-demand · billed monthly",
  },
] as const;

const ReservedNodePricing = () => {
  return (
    <div className="w-full mt-4 md:mt-10">
      <div className="rounded-t-md bg-cloud-gray p-4 md:px-10 md:py-7.25 flex flex-col md:flex-row justify-between items-center gap-2">
        <Text as="h3" weight="semibold">
          Reserved Node Pricing
        </Text>
        <Text
          textColor="primary"
          as="h6"
          fontFamily="spaceMono"
          className="text-center md:text-left"
        >
          {`commit longer  ·  pay less  ·  cancel anytime by EOL of term`}
        </Text>
      </div>
      <Divider orientation="horizontal" className="bg-gray-01" />
      <div className="w-full bg-white rounded-b-md flex items-center">
        <ReservedNodePricingTier {...RESERVED_PRICING_TIERS[0]} />
        <Divider orientation="vertical" className="h-39.5 bg-gray-01" />
        <ReservedNodePricingTier {...RESERVED_PRICING_TIERS[1]} />
        <Divider orientation="vertical" className="h-39.5 bg-gray-01" />
        <ReservedNodePricingTier {...RESERVED_PRICING_TIERS[2]} />
      </div>
    </div>
  );
};

export default ReservedNodePricing;
