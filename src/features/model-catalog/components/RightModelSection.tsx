import Link from "next/link";
import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import {
  MODEL_PRICING_ROWS,
  MODEL_PRICING_SKU_COUNT,
} from "../data/right-model-section-data";

const TABLE_HEADERS = [
  { id: "model", name: "model" },
  { id: "provider", name: "provider" },
  { id: "size", name: "size" },
  { id: "context", name: "context" },
  { id: "input", name: "input price*" },
  { id: "output", name: "output price*" },
  { id: "actions", name: "actions" },
] as const;

const CELL_CLASS =
  "px-3 py-2.5 text-left align-middle whitespace-nowrap first:pl-0 last:pr-0";

const ModelRowActions = () => (
  <div className="flex items-center gap-1.25">
    <Button fontFamily="spaceMono" className="px-2.5 py-1.75 text-xs">
      Try
    </Button>
    <Button
      variant="white-outline"
      fontFamily="spaceMono"
      className="px-2.5 py-1.75 text-xs border-gray-85 text-gray-85"
    >
      Docs
    </Button>
    <Button
      variant="white-outline"
      fontFamily="spaceMono"
      className="px-2.5 py-1.75 text-xs border-gray-85 text-gray-85"
    >
      Deploy
    </Button>
  </div>
);

const RightModelSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-8 md:py-16 2xl:py-25">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,167,139,0.12)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100" />

      <Container className="relative flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" align="center" className="max-w-4xl">
          Find the right model
          <Text as="span" variant="h2" textColor="primary">
            {" "}
            for your use case.
          </Text>
        </Text>
        <Text as="h6" textColor="gray-10" align="center" className="max-w-3xl">
          Every model row links to docs, the playground, and a one-click deploy
          template.
        </Text>

        <div className="mt-4 w-full rounded-lg border border-white-10 bg-white-5 font-mono shadow-sm backdrop-blur-md md:mt-12.5">
          <div className="flex items-center border-b border-gray-95 p-3.5">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <Text textColor="gray-80" fontFamily="spaceMono" className="ml-4.5">
              model-pricing - bash - 80×24
            </Text>
          </div>

          <div className="min-h-120 overflow-y-auto px-3.75 py-5 md:py-7.5">
            <Text
              as="h6"
              fontFamily="spaceMono"
              textColor="white"
              className="leading-7"
            >
              {`> model list --pricing --currency=INR`}
            </Text>
            <Text
              as="h6"
              textColor="gray-80"
              fontFamily="spaceMono"
              className="leading-7"
            >
              {`// fetched ${MODEL_PRICING_SKU_COUNT} SKUs • sorted by input/output tokens • *all price ₹/1M tokens`}
            </Text>

            <div className="mt-7.5 overflow-x-auto">
              <table className="w-full min-w-272 font-space-mono">
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
                  {MODEL_PRICING_ROWS.map((row) => (
                    <tr key={row.id} className="border-b border-black-7">
                      <td
                        className={`${CELL_CLASS} min-w-44 whitespace-normal`}
                      >
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
                          {row.provider}
                        </Text>
                      </td>
                      <td className={CELL_CLASS}>
                        <Text
                          as="h6"
                          fontFamily="spaceMono"
                          textColor="gray-75"
                        >
                          {row.size}
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
                        <Text as="h6" fontFamily="spaceMono" textColor="white">
                          {row.inputPrice}
                        </Text>
                      </td>
                      <td className={CELL_CLASS}>
                        <Text as="h6" fontFamily="spaceMono" textColor="white">
                          {row.outputPrice}
                        </Text>
                      </td>
                      <td className={CELL_CLASS}>
                        <ModelRowActions />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6.25 flex justify-end">
              <Link
                href="#"
                className="font-space-mono text-sm text-primary underline underline-offset-4"
              >
                Load more Models
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RightModelSection;
