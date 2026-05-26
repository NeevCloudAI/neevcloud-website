import Container from "@/shared/components/container";
import RightModelPricingTable from "./right-model/RightModelPricingTable";
import RightModelTerminalHeader from "./right-model/RightModelTerminalHeader";
import { Text } from "@/shared/ui-lib";

const RightModelSection = () => {
  return (
    <section
      className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="model-catalog-right-model-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,167,139,0.12)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="model-catalog-right-model-section-heading"
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
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

        <div
          className="mt-4 w-full rounded-lg border border-white-10 bg-white-5 font-mono shadow-sm backdrop-blur-md md:mt-12.5"
          aria-label="Model pricing terminal preview"
        >
          <RightModelTerminalHeader />
          <RightModelPricingTable />
        </div>
      </Container>
    </section>
  );
};

export default RightModelSection;
