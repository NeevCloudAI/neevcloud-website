import Container from "@/shared/components/container";
import { Divider, Text } from "@/shared/ui-lib";

const ModelsSection = () => {
  return (
    <section className="relative bg-gray-10 py-[3vh] md:py-[10vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" weight="semibold" align="center" className="max-w-4xl">
          See Models in Action,
          <Text
            as="span"
            variant="h2"
            weight="semibold"
            align="center"
            textColor="primary"
          >
            Not Just in Theory
          </Text>
        </Text>
        <Text align="center" textColor="black" className="mt-2 max-w-2xl">
          Understanding what a model can do is easier when you can actually use
          it. Our Model Playground gives you hands-on access to test prompts,
          upload images, analyze text, and explore capabilities before writing a
          single line of code.
        </Text>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center mt-4 md:mt-8">
          <div className="flex flex-col bg-primary px-4 py-2 rounded-md w-full">
            <Text as="h6" textColor="gray-10">
              Real-world performance
            </Text>
            <Text as="h3" weight="semibold" textColor="white">
              Real-world performance
            </Text>
          </div>
          <Divider orientation="horizontal" className="w-6" />
          <div className="flex flex-col bg-white px-4 py-2 rounded-md w-full">
            <Text as="h6" textColor="gray-90">
              Zero setup, instant access
            </Text>
            <Text as="h3" weight="semibold" textColor="black">
              Learn Without Infra
            </Text>
          </div>
          <Divider orientation="horizontal" className="w-6" />
          <div className="flex flex-col bg-white px-4 py-2 rounded-md w-full">
            <Text as="h6" textColor="gray-90">
              Idea → prod in minutes
            </Text>
            <Text as="h3" weight="semibold" textColor="black">
              Prototype Faster
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ModelsSection;
