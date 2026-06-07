import { CategoryFeatureCard } from "@/shared/components/category-feature-card";
import Container from "@/shared/components/container";
import { CONTRIBUTE_CATEGORIES } from "../data/contribute-section.data";
import { Text } from "@/shared/ui-lib";

const ContributeSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="public-sector-contribute-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="public-sector-contribute-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Contributing to
          <Text as="span" variant="h2" textColor="primary">
            National AI Infrastructure
          </Text>
          Goals
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          {`The India AI Mission aims to democratize AI access, build indigenous
          capabilities, and position India as a global AI leader. NeevCloud's
          infrastructure directly supports these objectives through accessible,
          sovereign, and scalable AI compute.`}
        </Text>
        <ul className="grid list-none grid-cols-1 gap-5 p-0 m-0 mt-4 md:grid-cols-2 md:mt-12.5 w-full">
          {CONTRIBUTE_CATEGORIES.map((category) => (
            <li key={category.title}>
              <CategoryFeatureCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ContributeSection;
