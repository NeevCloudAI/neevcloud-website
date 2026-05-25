import StoragePricingCalculator from "@/features/nvme/components/StoragePricingCalculator";
import Container from "@/shared/components/container";
import { Divider, Text } from "@/shared/ui-lib";

const TransparentPricingSection = () => {
  return (
    <section
      className={
        "relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-8 md:py-16 2xl:py-25"
      }
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] md:h-full top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" className="max-w-4xl">
          Simple,
          <Text as="span" variant="h2" textColor="primary">
            Transparent
          </Text>
          Pricing
        </Text>
        <Text as="h6" textColor="gray-10" align="center" className="max-w-3xl">
          25GB included free with every GPU instance. Pay only for additional
          capacity you provision.
        </Text>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-12.5 w-full">
          <div className="bg-white-5 rounded-xl w-full shadow-sm font-mono border border-white-10 backdrop-blur-sm">
            <div className="flex items-center gap-2 p-2.5 border-b border-black-5">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <Text textColor="gray-75" fontFamily="spaceMono" className="ml-5">
                {`~ nvme-pricing - bash - 80x24`}
              </Text>
            </div>

            <div className="px-2 md:px-3.75 py-2 md:py-7.5">
              <Text as="h6" fontFamily="spaceMono" textColor="white">
                {`› nvme list --pricing --currency=INR`}
              </Text>

              <Text
                as="h6"
                fontFamily="spaceMono"
                textColor="gray-75"
                className="mt-1.25"
              >
                {`// sub-millisecond access no network path`}
              </Text>

              <Divider
                orientation="horizontal"
                className="mt-7.25 bg-black-5"
              />

              <div className="flex items-center justify-between gap-2 mt-5.5 mb-5">
                <Text fontFamily="spaceMono" textColor="blue-40" as="h6">
                  First 25GB
                </Text>
                <Text fontFamily="spaceMono" textColor="primary" as="h6">
                  free
                </Text>
              </div>
              <Divider orientation="horizontal" className="bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-5.5 mb-5">
                <Text fontFamily="spaceMono" textColor="blue-40" as="h6">
                  Additional storage
                </Text>
                <Text fontFamily="spaceMono" textColor="white" as="h6">
                  ₹4.17 / GB / hr
                </Text>
              </div>
              <Divider orientation="horizontal" className="bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-5.5 mb-5">
                <Text fontFamily="spaceMono" textColor="blue-40" as="h6">
                  Transfer charges
                </Text>
                <Text fontFamily="spaceMono" textColor="primary" as="h6">
                  none
                </Text>
              </div>
              <Divider orientation="horizontal" className="bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-5.5">
                <Text fontFamily="spaceMono" textColor="blue-40" as="h6">
                  Billing granularity
                </Text>
                <Text fontFamily="spaceMono" textColor="white" as="h6">
                  Per second
                </Text>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl border border-black-5 bg-primary-5 p-4 md:p-10">
            <StoragePricingCalculator />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TransparentPricingSection;
