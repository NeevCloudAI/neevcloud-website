import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  THREE_STEPS_HEADING_BLACK,
  THREE_STEPS_HEADING_PRIMARY,
  THREE_STEPS_SUBTEXT,
} from "../constants/four-steps-section.constants";
import ThreeStepsSectionClient from "./ThreeStepsSectionClient";

const ThreeStepSection = () => {
  return (
    <section
      className="bg-white relative py-8 md:pt-16 2xl:pt-25"
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
        <Text align="center" textColor="black-5" className="mt-2.5">
          {THREE_STEPS_SUBTEXT}
        </Text>

        <ThreeStepsSectionClient />
      </Container>
    </section>
  );
};

export default ThreeStepSection;
