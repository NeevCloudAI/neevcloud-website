import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { OPEN_POSITIONS_SECTION } from "../data/open-positions-section.data";

const OpenPositionsSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="open-positions-section-heading"
      id="current-openings"
    >
      <Container className="relative flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="open-positions-section-heading"
          align="center"
          className="max-w-4xl"
        >
          {OPEN_POSITIONS_SECTION.title}
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          {OPEN_POSITIONS_SECTION.description}
        </Text>
        <div
          id="khembedjobs"
          className="mt-8 w-full md:mt-12.5"
          aria-label="Job openings"
        />
      </Container>
    </section>
  );
};

export default OpenPositionsSection;
