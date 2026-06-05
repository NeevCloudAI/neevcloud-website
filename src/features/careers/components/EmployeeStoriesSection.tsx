import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  EMPLOYEE_STORIES,
  EMPLOYEE_STORIES_SECTION,
} from "../data/employee-stories-section.data";
import EmployeeStoriesCarouselClient from "./EmployeeStoriesCarouselClient";

const EmployeeStoriesSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-25"
      aria-labelledby="employee-stories-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="employee-stories-section-heading"
          align="center"
          className="max-w-4xl"
        >
          {EMPLOYEE_STORIES_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {EMPLOYEE_STORIES_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          {EMPLOYEE_STORIES_SECTION.description}
        </Text>
        <EmployeeStoriesCarouselClient stories={EMPLOYEE_STORIES} />
      </Container>
    </section>
  );
};

export default EmployeeStoriesSection;
