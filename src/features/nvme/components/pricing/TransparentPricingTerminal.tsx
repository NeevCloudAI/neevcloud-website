import TransparentPricingRow from "./TransparentPricingRow";
import TransparentPricingTerminalHeader from "./TransparentPricingTerminalHeader";
import { Divider, Text } from "@/shared/ui-lib";

const TransparentPricingTerminal = () => {
  return (
    <div
      className="bg-white/6 rounded-xl w-full shadow-sm font-mono border border-white/12 backdrop-blur-md"
      role="region"
      aria-label="NVMe pricing terminal"
    >
      <TransparentPricingTerminalHeader />

      <div className="px-4 md:px-3.75 py-2 md:py-7.5">
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {`› nvme list --pricing --currency=INR`}
        </Text>

        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor="gray-04"
          className="mt-1.25"
        >
          {`// sub-millisecond access no network path`}
        </Text>

        <Divider orientation="horizontal" className="mt-7.25 bg-black/8" />

        <TransparentPricingRow
          label="First 25GB"
          value="free"
          valueColor="primary"
        />
        <TransparentPricingRow
          label="Additional storage"
          value="₹4.17 / GB / hr"
        />
        <TransparentPricingRow
          label="Transfer charges"
          value="none"
          valueColor="primary"
        />
        <TransparentPricingRow label="Billing granularity" value="Per second" />
      </div>
    </div>
  );
};

export default TransparentPricingTerminal;
