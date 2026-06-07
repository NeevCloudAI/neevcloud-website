import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  PROBLEM_COLUMN,
  PROBLEM_SOLUTION_SECTION,
  SOLUTION_COLUMN,
} from "../data/problem-solution-section.data";
import ProblemSolutionColumn from "./ProblemSolutionColumn";

const ProblemSolutionSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="problem-solution-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="problem-solution-section-heading"
          align="center"
          className="max-w-4xl"
        >
          {PROBLEM_SOLUTION_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {PROBLEM_SOLUTION_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          {PROBLEM_SOLUTION_SECTION.description}
        </Text>

        <div className="mt-4 grid w-full grid-cols-1 overflow-hidden rounded-md md:mt-12.5 md:grid-cols-2">
          <ProblemSolutionColumn column={PROBLEM_COLUMN} theme="problem" />
          <ProblemSolutionColumn column={SOLUTION_COLUMN} theme="solution" />
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolutionSection;
