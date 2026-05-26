import TokenPricingTable from "@/features/serverless-inference/components/token-pricing/TokenPricingTable";
import TokenPricingTerminalHeader from "@/features/serverless-inference/components/token-pricing/TokenPricingTerminalHeader";
import { Text } from "@/shared/ui-lib";

const TokenPricingTerminal = () => {
  return (
    <div
      className="bg-white-5 backdrop-blur-md rounded-lg w-full shadow-sm font-mono border border-white-10"
      role="region"
      aria-label="Inference pricing terminal"
    >
      <TokenPricingTerminalHeader />

      <div className="px-3.75 py-5 md:py-7.5 min-h-120 overflow-y-auto">
        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor="white"
          className="leading-7"
        >
          {`› model inference list --pricing --currency=INR`}
        </Text>
        <Text
          as="h6"
          textColor="gray-80"
          fontFamily="spaceMono"
          className="leading-7"
        >
          {`// fetched 4 models • per-token billing • all amounts ₹ per 1M tokens`}
        </Text>

        <TokenPricingTable />

        <Text
          as="h6"
          textColor="gray-80"
          className="mt-8.75"
          fontFamily="spaceMono"
        >
          {`// volume discounts applied automatically`}
          <Text
            as="span"
            variant="h6"
            textColor="primary"
            className="ml-2 md:ml-2"
          >
            above 10M tokens/month
          </Text>
        </Text>

        <Text as="h6" textColor="gray-80" fontFamily="spaceMono">
          {`// limits reset monthly`}
        </Text>
      </div>
    </div>
  );
};

export default TokenPricingTerminal;
