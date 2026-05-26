import { Divider, Text } from "@/shared/ui-lib";
import ControlPlaneTerminalHeader from "./ControlPlaneTerminalHeader";

const ControlPlanePricingTerminal = () => {
  return (
    <div
      className="bg-white-5 backdrop-blur-md rounded-lg w-full shadow-sm font-mono border border-white-10"
      role="region"
      aria-label="NKS pricing terminal"
    >
      <ControlPlaneTerminalHeader />

      <div className="px-2 md:px-3.75 py-2 md:pt-7.5">
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {`› nks list --pricing --currency=INR`}
        </Text>

        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor="gray-75"
          className="mt-1.25"
        >
          {`// what you pay for all amounts in ₹`}
        </Text>

        <div className="flex items-center justify-between gap-2 md:pl-3.75">
          <Text as="h6" fontFamily="spaceMono" textColor="gray-75">
            category
          </Text>
          <Text as="h6" fontFamily="spaceMono" textColor="primary">
            Pricing
          </Text>
        </div>
        <Divider orientation="horizontal" className="my-5 bg-black-5" />

        <div className="flex items-center justify-between gap-2 md:pl-3.75">
          <Text fontFamily="spaceMono" textColor="primary" as="h6">
            GPU nodes
          </Text>
          <Text fontFamily="spaceMono" textColor="red-50" as="h6">
            on-demand pricing
          </Text>
        </div>
        <Divider orientation="horizontal" className="my-5 bg-black-5" />

        <div className="flex items-center justify-between gap-2 md:pl-3.75">
          <Text fontFamily="spaceMono" textColor="primary" as="h6">
            CPU nodes
          </Text>
          <Text fontFamily="spaceMono" textColor="red-50" as="h6">
            on-demand pricing
          </Text>
        </div>
        <Divider orientation="horizontal" className="my-5 bg-black-5" />

        <div className="flex items-center justify-between gap-2 md:pl-3.75">
          <Text fontFamily="spaceMono" textColor="primary" as="h6">
            Persistent storage
          </Text>
          <Text fontFamily="spaceMono" textColor="red-50" as="h6">
            ₹8.35/GB/mo
          </Text>
        </div>
        <Divider orientation="horizontal" className="my-5 bg-black-5" />

        <div className="flex items-center justify-between gap-2 md:pl-3.75">
          <Text fontFamily="spaceMono" textColor="primary" as="h6">
            Egress (within India)
          </Text>
          <Text fontFamily="spaceMono" textColor="red-50" as="h6">
            free
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ControlPlanePricingTerminal;
