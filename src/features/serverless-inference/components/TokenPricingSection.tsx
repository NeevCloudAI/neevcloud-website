import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import { PRICING_MODEL } from "../data/pricing-table-data";

const TABLE_HEADERS = [
  { id: "model", name: "model" },
  { id: "params", name: "params" },
  { id: "context", name: "context" },
  { id: "input", name: "input ₹/1M" },
  { id: "output", name: "output ₹/1M" },
  { id: "free", name: "free tier" },
] as const;

const CELL_CLASS =
  "px-3 py-2.5 text-left align-middle whitespace-nowrap first:pl-0 last:pr-0";

const TokenPricingSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-8 md:py-16 2xl:py-25">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" align="center" className="max-w-4xl">
          Token pricing.
          <Text as="span" variant="h2" textColor="primary">
            No Surprises.
          </Text>
        </Text>
        <Text as="h6" textColor="gray-10" align="center" className="max-w-3xl">
          Pay per token, input and output billed separately. All charges in INR.
          Volume discounts unlock automatically above 10M tokens per month.
          Reserved inference capacity available for high-volume workloads.
        </Text>

        <div className="bg-white-5 backdrop-blur-md rounded-lg w-full shadow-sm font-mono border border-white-10 mt-4 md:mt-12.5">
          <div className="flex items-center border-b border-gray-95 p-3.5">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <Text textColor="gray-80" fontFamily="spaceMono" className="ml-4.5">
              ~ inference-pricing - bash - 80×24
            </Text>
          </div>

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

            <div className="mt-7.5 overflow-x-auto">
              <table className="w-full font-space-mono">
                <thead>
                  <tr className="border-b border-black-30">
                    {TABLE_HEADERS.map((header) => (
                      <th
                        key={header.id}
                        scope="col"
                        className={`${CELL_CLASS} font-normal`}
                      >
                        <Text
                          as="h6"
                          fontFamily="spaceMono"
                          textColor="gray-80"
                        >
                          {header.name}
                        </Text>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRICING_MODEL.map((row) => (
                    <tr key={row.id} className="border-b border-black-7">
                      <td className={CELL_CLASS}>
                        <Text
                          as="h6"
                          textColor="primary-105"
                          fontFamily="spaceMono"
                        >
                          {row.model.title}
                        </Text>
                        <Text
                          fontFamily="spaceMono"
                          as="small"
                          textColor="gray-80"
                        >
                          {row.model.description}
                        </Text>
                      </td>
                      <td className={CELL_CLASS}>
                        <Text
                          as="h6"
                          fontFamily="spaceMono"
                          textColor="gray-75"
                        >
                          {row.params}
                        </Text>
                      </td>
                      <td className={CELL_CLASS}>
                        <Text
                          as="h6"
                          fontFamily="spaceMono"
                          textColor="gray-75"
                        >
                          {row.context}
                        </Text>
                      </td>
                      <td className={CELL_CLASS}>
                        <Text
                          as="h6"
                          fontFamily="spaceMono"
                          textColor="primary"
                        >
                          {row.input}
                        </Text>
                      </td>
                      <td className={CELL_CLASS}>
                        <Text as="h6" fontFamily="spaceMono" textColor="red-50">
                          {row.output}
                        </Text>
                      </td>
                      <td className={CELL_CLASS}>
                        <Text
                          as="h6"
                          fontFamily="spaceMono"
                          textColor={row.free ? "orange-50" : "white"}
                        >
                          {row.free || "-"}
                        </Text>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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

export default TokenPricingSection;
