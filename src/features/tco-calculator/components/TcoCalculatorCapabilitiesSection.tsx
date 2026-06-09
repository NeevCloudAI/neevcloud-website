import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { TCO_CALCULATOR_CAPABILITIES_ITEMS } from "../data/capabilities-section.data";

const TcoCalculatorCapabilitiesSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="tco-calculator-capabilities-section-heading"
      id="tco-calculator-capabilities-section"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="tco-calculator-capabilities-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Compare Cloud
          <Text as="span" variant="h2" textColor="primary">
            GPU Costs
          </Text>
          Transparently
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-4xl"
        >
          Cloud GPU costs add up fast. The NeevCloud TCO Calculator gives you an
          apples-to-apples view with no signup required.
        </Text>
        <ul className="m-0 grid w-full list-none grid-cols-1 gap-5 p-0 pt-4 md:grid-cols-3 md:pt-12.5">
          {TCO_CALCULATOR_CAPABILITIES_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TcoCalculatorCapabilitiesSection;
