import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { USE_MODEL_CARDS } from "@/features/model-catalog/data/use-model-data";
import UseModelCard from "./UseModelCard";

const UseModelSection = () => {
  return (
    <section className="relative bg-primary-20 py-[3vh] md:py-[7vh]">
      <Container className="flex flex-col items-center justify-center gap-6 md:gap-10">
        <Text
          as="h2"
          weight="semibold"
          align="center"
          textColor="primary"
          className="max-w-4xl"
        >
          Three ways
          <Text as="span" variant="h2" weight="semibold" textColor="black">
            to use these models.
          </Text>
        </Text>
        <Text align="center" textColor="black-5" className="max-w-2xl">
          Pick the integration style that matches your stack. All three hit the
          same endpoints with the same auth, no behavioural differences.
        </Text>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {USE_MODEL_CARDS.map((card) => (
            <UseModelCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UseModelSection;
