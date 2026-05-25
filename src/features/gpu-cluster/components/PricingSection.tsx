import Container from "@/shared/components/container";
import GpuPricingTable from "@/features/gpu-cluster/components/GpuPricingTable";
import { Button, Divider, Text } from "@/shared/ui-lib";

const PricingSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-8 md:py-16 2xl:py-25">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" align="center" className="max-w-4xl">
          Every Workload
          <Text as="span" variant="h2" textColor="primary">
            Flat rate.
          </Text>
          Unmetered.
        </Text>
        <Text textColor="gray-10" align="center">
          Commit and Save. The Longer the Plan, the Lower the Rate.
        </Text>

        <div className="bg-white-5 backdrop-blur-sm rounded-lg w-full shadow-sm font-mono border border-white-10 mt-4 md:mt-12.5">
          <div className="flex items-center border-b border-gray-95 p-3.5">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <Text textColor="gray-80" fontFamily="spaceMono" className="ml-4.5">
              ~/create.sh · path
            </Text>
          </div>

          <div className="p-4 md:py-7.5 pb-0 md:pb-0">
            <Text as="h6" fontFamily="spaceMono" textColor="white">
              {`› gpu list --pricing --currency=INR`}
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

        <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-4 md:mt-25">
          <Button weight="semibold">View Complete Pricing</Button>
          <Button variant="white" textColor="black" weight="semibold">
            Contact for Custom Plans
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
