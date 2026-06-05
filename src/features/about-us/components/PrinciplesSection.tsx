import Container from "@/shared/components/container";
import NumberedDetailCard from "@/shared/components/numbered-detail-card";
import { Text } from "@/shared/ui-lib";
import {
  PRINCIPLE_ITEMS,
  PRINCIPLES_SECTION,
} from "../data/principles-section.data";

const PrinciplesSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="principles-section-heading"
    >
      <Container className="relative flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="principles-section-heading"
          align="center"
          className="max-w-4xl"
        >
          {PRINCIPLES_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {PRINCIPLES_SECTION.titleHighlight}
          </Text>
        </Text>

        <div className="mt-8 grid w-full grid-cols-1 gap-5 md:mt-12.5 md:grid-cols-2">
          {PRINCIPLE_ITEMS.map(({ id, ...principle }) => (
            <NumberedDetailCard key={id} {...principle} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PrinciplesSection;
