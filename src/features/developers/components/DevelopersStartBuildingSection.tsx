import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  DEVELOPERS_START_BUILDING_ITEMS,
  DEVELOPERS_START_BUILDING_SECTION,
} from "../data/start-building-section.data";

const DevelopersStartBuildingSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="developers-start-building-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="developers-start-building-section-heading"
          align="center"
          className="max-w-4xl"
        >
          {DEVELOPERS_START_BUILDING_SECTION.title}
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          {DEVELOPERS_START_BUILDING_SECTION.description}
        </Text>
        <ul className="m-0 grid w-full list-none grid-cols-1 gap-5 p-0 pt-4 md:grid-cols-3 md:pt-12.5">
          {DEVELOPERS_START_BUILDING_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default DevelopersStartBuildingSection;
