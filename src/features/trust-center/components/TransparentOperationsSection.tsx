import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  TRANSPARENT_OPERATIONS_ITEMS,
  TRANSPARENT_OPERATIONS_SECTION,
} from "../data/transparent-operations-section.data";

const TransparentOperationsSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="transparent-operations-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="transparent-operations-section-heading"
          align="center"
          className="max-w-4xl"
        >
          {TRANSPARENT_OPERATIONS_SECTION.title}
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black/82"
          className="mt-2.5 max-w-3xl"
        >
          {TRANSPARENT_OPERATIONS_SECTION.description}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:pt-12.5">
          {TRANSPARENT_OPERATIONS_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TransparentOperationsSection;
