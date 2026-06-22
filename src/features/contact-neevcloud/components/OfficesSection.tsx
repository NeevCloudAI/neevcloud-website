import Container from "@/shared/components/container";
import NumberedDetailCard from "@/shared/components/numbered-detail-card";
import { Text } from "@/shared/ui-lib";
import {
  OFFICE_LOCATIONS,
  OFFICES_SECTION,
} from "../data/offices-section.data";

const OfficesSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-cloud-gray py-8 md:py-16 2xl:py-25 bg-[url('/images/webp/map.webp')] bg-cover bg-center bg-no-repeat"
      aria-labelledby="offices-section-heading"
    >
      <Container className="relative flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="offices-section-heading"
          align="center"
          className="max-w-4xl"
        >
          {OFFICES_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {OFFICES_SECTION.titleHighlight}
          </Text>
        </Text>

        <div className="mt-8 grid w-full list-none grid-cols-1 gap-5 p-0 m-0 md:mt-12.5 md:grid-cols-3">
          {OFFICE_LOCATIONS.map(({ id, ...office }) => (
            <NumberedDetailCard key={id} {...office} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OfficesSection;
