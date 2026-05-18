import PricingCalculator from "@/features/model-api/components/PricingCalculator";
import Container from "@/shared/components/container";
import { Divider, Text } from "@/shared/ui-lib";

const PaySection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] md:h-[50%] top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" weight="semibold" className="max-w-4xl">
          Pay for what you use.
          <Text as="span" variant="h2" textColor="primary">
            Nothing more.
          </Text>
        </Text>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-8 w-full">
          <div className="bg-white-5 rounded-xl w-full shadow-sm font-mono border border-white-10 backdrop-blur-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-black-5">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <Text textColor="gray-75" fontFamily="spaceMono" className="ml-4">
                {`~ model-api-pricing - bash - 80×24`}
              </Text>
            </div>

            <div className="px-2 md:px-5 py-2 md:py-8">
              <Text fontFamily="spaceMono" textColor="white">
                {`› model api list --pricing --currency=INR`}
              </Text>

              <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1">
                {`// fetched 4 models per-requests billing all amounts in ₹`}
              </Text>

              <div className="flex items-center justify-between gap-2 mt-4">
                <Text fontFamily="spaceMono" textColor="gray-75">
                  category
                </Text>
                <Text fontFamily="spaceMono" textColor="gray-75">
                  Price / request
                </Text>
                <Text fontFamily="spaceMono" textColor="gray-75">
                  Pricing
                </Text>
              </div>
              <Divider orientation="horizontal" className="my-4 bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-4">
                <Text fontFamily="spaceMono" textColor="primary" as="h6">
                  Text Models
                </Text>
                <Text fontFamily="spaceMono" textColor="red-50" as="h6">
                  ₹0.0001
                </Text>
                <Text fontFamily="spaceMono" textColor="gray-75" as="h6">
                  50-200ms
                </Text>
              </div>
              <Divider orientation="horizontal" className="my-4 bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-4">
                <Text fontFamily="spaceMono" textColor="primary" as="h6">
                  Vision Models
                </Text>
                <Text fontFamily="spaceMono" textColor="red-50" as="h6">
                  ₹0.0003
                </Text>
                <Text fontFamily="spaceMono" textColor="gray-75" as="h6">
                  50-200ms
                </Text>
              </div>
              <Divider orientation="horizontal" className="my-4 bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-4">
                <Text fontFamily="spaceMono" textColor="primary" as="h6">
                  Audio Models
                </Text>
                <Text fontFamily="spaceMono" textColor="red-50" as="h6">
                  ₹0.0002
                </Text>
                <Text fontFamily="spaceMono" textColor="gray-75" as="h6">
                  200-500ms
                </Text>
              </div>
              <Divider orientation="horizontal" className="my-4 bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-4">
                <Text fontFamily="spaceMono" textColor="primary" as="h6">
                  Specialized
                </Text>
                <Text fontFamily="spaceMono" textColor="red-50" as="h6">
                  Custom
                </Text>
                <Text fontFamily="spaceMono" textColor="gray-75" as="h6">
                  varies
                </Text>
              </div>
              <Divider orientation="horizontal" className="my-4 bg-black-5" />

              <Text
                fontFamily="spaceMono"
                textColor="gray-75"
                className="mt-1"
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
          <div className="w-full rounded-xl border border-black-5 bg-white p-4 md:p-8">
            <PricingCalculator />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaySection;
