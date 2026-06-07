import ApplicationCard from "@/shared/components/application-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  ARENA_DIFFERENT_CARDS,
  ARENA_DIFFERENT_SECTION,
} from "../data/arena-different-section.data";

const ArenaDifferentSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="arena-different-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="arena-different-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          {ARENA_DIFFERENT_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {ARENA_DIFFERENT_SECTION.titleHighlight}
          </Text>
          {ARENA_DIFFERENT_SECTION.titleSuffix}
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          {ARENA_DIFFERENT_SECTION.description}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-6 p-0 m-0 pt-4 md:grid-cols-6 md:pt-12.5">
          {ARENA_DIFFERENT_CARDS.map((card) => (
            <li key={card.id} className={card.className}>
              <ApplicationCard
                label={card.label}
                title={card.title}
                description={card.description}
                icon={card.icon}
                theme={card.theme}
                image={card.image}
                imageSpacing={card.imageSpacing}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ArenaDifferentSection;
