import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { AMBITION_ITEMS } from "../data/ambition-section.data";
import { Text } from "@/shared/ui-lib";

const AmbitionSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="public-sector-ambition-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="public-sector-ambition-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Supporting
          <Text as="span" variant="h2" textColor="primary">
            {`India's AI`}
          </Text>
          Ambitions
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          {`As India accelerates AI adoption across government, public services, and strategic sectors, infrastructure requirements extend beyond technical specifications to include sovereignty, compliance, and alignment with national development goals.`}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:pt-12.5">
          {AMBITION_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AmbitionSection;
