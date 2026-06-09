import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  CELEBRATE_SECTION,
  CELEBRATE_STATS,
} from "../data/celebrate-section.data";
import CelebrateGallery from "./celebrate/CelebrateGallery";
import CelebrateStatCard from "./celebrate/CelebrateStatCard";

const CelebrateSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="life-at-neevcloud-celebrate-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="life-at-neevcloud-celebrate-section-heading"
          textColor="black"
          align="center"
          className="max-w-6xl"
        >
          {CELEBRATE_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {CELEBRATE_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          {CELEBRATE_SECTION.description}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 mt-4 sm:grid-cols-2 md:mt-12.5 lg:grid-cols-4">
          {CELEBRATE_STATS.map((item) => (
            <li key={item.id}>
              <CelebrateStatCard item={item} />
            </li>
          ))}
        </ul>
        <CelebrateGallery />
      </Container>
    </section>
  );
};

export default CelebrateSection;
