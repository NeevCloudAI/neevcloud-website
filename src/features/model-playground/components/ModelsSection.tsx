import Container from "@/shared/components/container";
import ModelsSectionClient from "./ModelsSectionClient";
import { Text } from "@/shared/ui-lib";

const ModelsSection = () => {
  return (
    <section
      className="bg-gray-10 relative py-8 md:py-16 2xl:py-25"
      aria-labelledby="models-in-action-section-heading"
    >
      <Container className="relative flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="models-in-action-section-heading"
          align="center"
          className="max-w-4xl"
        >
          See Models in Action,
          <Text as="span" variant="h2" align="center" textColor="primary">
            Not Just in Theory
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          Understanding what a model can do is easier when you can actually use
          it. Our Model Playground gives you hands-on access to test prompts,
          upload images, analyze text, and explore capabilities before writing a
          single line of code.
        </Text>

        <ModelsSectionClient />
      </Container>
    </section>
  );
};

export default ModelsSection;
