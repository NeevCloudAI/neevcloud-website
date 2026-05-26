import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  THREE_STEPS_HEADING_BLACK,
  THREE_STEPS_HEADING_PRIMARY,
  THREE_STEPS_SUBTEXT,
} from "../constants/three-steps-section.constants";
import ThreeStepsSectionClient from "./ThreeStepsSectionClient";

const ThreeStepsSection = () => {
  return (
    <section
      className="bg-gray-10 relative py-8 md:py-16 2xl:py-25"
      aria-labelledby="three-steps-section-heading"
    >
      <Container className="relative">
        <Text
          as="h2"
          id="three-steps-section-heading"
          weight="semibold"
          align="center"
        >
          {THREE_STEPS_HEADING_BLACK}
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            {THREE_STEPS_HEADING_PRIMARY}
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black-5">
          {THREE_STEPS_SUBTEXT}
        </Text>

        <ThreeStepsSectionClient />
      </Container>
    </section>
  );
};

export default ThreeStepsSection;
