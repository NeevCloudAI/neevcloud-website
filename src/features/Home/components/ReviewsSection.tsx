import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  REVIEWS_SECTION_SUBTITLE,
  REVIEWS_SECTION_SUBTITLE_2,
  REVIEWS_SECTION_TITLE_HIGHLIGHT,
  REVIEWS_SECTION_TITLE_PREFIX,
  REVIEWS_SECTION_TITLE_SUFFIX,
  REVIEWS_SECTION_TITLE_SUFFIX_2,
} from "@/features/Home/constants/reviews-section.constants";
import ReviewsCarousel from "./ReviewsCarousel";

const ReviewsSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gray-10 py-6 md:py-24"
      aria-labelledby="reviews-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-radial-[at_60%_40%] from-teal-300/30 via-transparent to-transparent blur-xl"
        aria-hidden="true"
      />
      <Container className="relative z-10" alignRight>
        <header className="text-center flex flex-col items-center">
          <Text as="h2" weight="semibold">
            {REVIEWS_SECTION_TITLE_PREFIX}
            <Text as="span" variant="h2" textColor="primary">
              {REVIEWS_SECTION_TITLE_HIGHLIGHT}
            </Text>
            {REVIEWS_SECTION_TITLE_SUFFIX}
          </Text>
          <Text as="h2" weight="semibold">
            {REVIEWS_SECTION_TITLE_SUFFIX_2}
          </Text>
          <Text as="h6" align="center" className="block md:hidden">
            {REVIEWS_SECTION_SUBTITLE} {REVIEWS_SECTION_SUBTITLE_2}
          </Text>
          <Text as="h6" align="center" className="mt-4 hidden md:block">
            {REVIEWS_SECTION_SUBTITLE}
          </Text>
          <Text as="h6" align="center" className="hidden md:block">
            {REVIEWS_SECTION_SUBTITLE_2}
          </Text>
        </header>
      </Container>
      <ReviewsCarousel />
    </section>
  );
};

export default ReviewsSection;
