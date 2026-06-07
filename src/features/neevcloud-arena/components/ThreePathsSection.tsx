import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  THREE_PATHS_HEADING_BLACK,
  THREE_PATHS_HEADING_PRIMARY,
  THREE_PATHS_SUBTEXT,
} from "../constants/three-paths-section.constants";
import ThreePathsSectionClient from "./ThreePathsSectionClient";

const ThreePathsSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="arena-three-paths-section-heading"
    >
      <Container className="relative">
        <Text
          as="h2"
          id="arena-three-paths-section-heading"
          weight="semibold"
          align="center"
        >
          {THREE_PATHS_HEADING_BLACK}
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            {THREE_PATHS_HEADING_PRIMARY}
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black-5" className="mt-2.5">
          {THREE_PATHS_SUBTEXT}
        </Text>
        <ThreePathsSectionClient />
      </Container>
    </section>
  );
};

export default ThreePathsSection;
