import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { CONSOLE_SECTION } from "../data/console-section.data";
import ConsoleSectionClient from "./LlmDeploymentSectionClient";

const ConsoleSection = () => {
  return (
    <section
      className="bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="console-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        {/* Heading */}
        <Text
          as="h2"
          id="console-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          {CONSOLE_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {CONSOLE_SECTION.titleHighlight}
          </Text>
          {CONSOLE_SECTION.titleSuffix}
        </Text>

        {/* Subtitle */}
        <Text
          as="h6"
          textColor="black-5"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          {CONSOLE_SECTION.description}
        </Text>

        {/* Tabs + panels */}
        <ConsoleSectionClient />
      </Container>
    </section>
  );
};

export default ConsoleSection;
