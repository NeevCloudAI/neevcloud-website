import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import ModelActionPlayground from "./ModelActionPlayground";

const ModelActionSection = () => {
  return (
    <section
      className=" bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="model-catalog-action-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="model-catalog-action-section-heading"
          align="center"
          className="max-w-4xl"
        >
          See Any Model in
          <Text as="span" variant="h2" textColor="primary">
            Action
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="black-5"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          {`Pick a model, send a prompt, watch it respond. Latency, token count,
          and cost stream in real time, exactly what you'd see hitting the
          production API.`}
        </Text>

        <div className="mt-4 w-full rounded-lg font-mono md:mt-12.5">
          <ModelActionPlayground />
        </div>
      </Container>
    </section>
  );
};

export default ModelActionSection;
