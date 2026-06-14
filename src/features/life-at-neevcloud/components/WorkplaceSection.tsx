import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { WORKPLACE_ITEMS } from "../data/workplace-section.data";

const WorkplaceSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="life-at-neevcloud-workplace-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="life-at-neevcloud-workplace-section-heading"
          textColor="black"
          align="center"
          className="max-w-6xl"
        >
          A Workplace Designed for
          <Text
            as="span"
            variant="h2"
            textColor="primary"
            className="mr-0 md:mr-0"
          >
            Thinkers
          </Text>
          ,
          <Text as="span" variant="h2" textColor="primary">
            Builders
          </Text>
          &
          <Text as="span" variant="h2" textColor="primary">
            Doers
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black/82"
          className="mt-2.5 max-w-3xl"
        >
          From focused work zones to collaborative spaces, NeevCloud thrives on
          energy, ownership, and constant learning.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 mt-4 md:grid-cols-3 md:mt-12.5">
          {WORKPLACE_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WorkplaceSection;
