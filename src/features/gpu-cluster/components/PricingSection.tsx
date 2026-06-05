import Container from "@/shared/components/container";
import GpuPricingTable from "./GpuPricingTable";
import PricingSectionActions from "./PricingSectionActions";
import PricingTerminalHeader from "./PricingTerminalHeader";
import { Divider, Text } from "@/shared/ui-lib";

const PricingSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="gpu-pricing-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-pricing-section-heading"
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          Every Workload
          <Text as="span" variant="h2" textColor="primary">
            Flat rate.
          </Text>
          Unmetered.
        </Text>
        <Text
          as="h6"
          textColor="gray-10"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          Commit and Save. The Longer the Plan, the Lower the Rate.
        </Text>

        <div
          className="bg-white-5 backdrop-blur-md rounded-lg w-full shadow-sm font-mono border border-white-10 mt-4 md:mt-12.5"
          role="region"
          aria-label="Terminal-style GPU pricing listing"
        >
          <PricingTerminalHeader />

          <div className="p-4 md:py-7.5 pb-0 md:pb-0">
            <Text as="h6" fontFamily="spaceMono" textColor="white">
              {`› gpu list --pricing --currency=INR`}
            </Text>

            <Text
              as="h6"
              textColor="gray-75"
              className="mt-1"
              fontFamily="spaceMono"
            >
              {`// fetched 6 SKUs · sorted by hourly rate · all amounts ₹/hr/gpu `}
            </Text>
            <GpuPricingTable />
          </div>

          <Divider orientation="horizontal" className="mt-4 mb-5 bg-gray-95" />

          <Text
            textColor="gray-80"
            className="ml-3.5 mb-5"
          >{`// reserved plans bill for full window · run \`gpu calc <sku> --hours=N\` to estimate`}</Text>
        </div>

        <PricingSectionActions />
      </Container>
    </section>
  );
};

export default PricingSection;
