import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import {
  DATA_JURISDICTION_CARDS,
  DATA_JURISDICTION_SECTION,
} from "../data/data-jurisdiction-section.data";

const DataJurisdictionSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="data-jurisdiction-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="data-jurisdiction-section-heading"
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          {DATA_JURISDICTION_SECTION.titlePrefix}
          <Text
            as="span"
            variant="h2"
            textColor="primary"
            className="mx-0 md:mx-0"
          >
            {DATA_JURISDICTION_SECTION.titleHighlight1}
          </Text>
          {DATA_JURISDICTION_SECTION.titleMiddle}
          <Text
            as="span"
            variant="h2"
            textColor="primary"
            className="mx-0 md:mx-0"
          >
            {DATA_JURISDICTION_SECTION.titleHighlight2}
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="cloud-gray"
          className="mt-2.5 max-w-3xl"
        >
          {DATA_JURISDICTION_SECTION.description}
        </Text>
        <ul className="m-0 mt-4 grid w-full grid-cols-1 gap-5 p-0 md:mt-12.5 md:grid-cols-3">
          {DATA_JURISDICTION_CARDS.map((feature) => (
            <li key={feature.title}>
              <FeatureCard
                theme="transparent"
                title={feature.title}
                image={feature.image}
                description={feature.description}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default DataJurisdictionSection;
