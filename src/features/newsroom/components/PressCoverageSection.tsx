import Container from "@/shared/components/container";
import { PRESS_COVERAGE_ITEMS } from "../data/press-coverage-section.data";
import PressCoverageCard from "./press-coverage/PressCoverageCard";

const PressCoverageSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-label="Press coverage"
    >
      <Container>
        <ul className="grid grid-cols-1 gap-4 md:gap-x-5 md:gap-y-10 md:grid-cols-2">
          {PRESS_COVERAGE_ITEMS.map((item) => (
            <li key={item.id}>
              <PressCoverageCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PressCoverageSection;
