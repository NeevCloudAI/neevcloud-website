import Container from "@/shared/components/container";
import UseModelCard from "./UseModelCard";
import { USE_MODEL_CARDS } from "../data/use-model-section.data";
import { Text } from "@/shared/ui-lib";

const UseModelSection = () => {
  return (
    <section
      className="relative bg-primary-20 py-8 md:py-16 2xl:py-25"
      aria-labelledby="model-catalog-use-model-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="model-catalog-use-model-section-heading"
          align="center"
          textColor="primary"
          className="max-w-4xl"
        >
          Three ways
          <Text as="span" variant="h2" textColor="black">
            to use these models.
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-2xl mt-2.5"
        >
          Pick the integration style that matches your stack. All three hit the
          same endpoints with the same auth, no behavioural differences.
        </Text>

        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {USE_MODEL_CARDS.map((card) => (
            <li key={card.id}>
              <UseModelCard card={card} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default UseModelSection;
