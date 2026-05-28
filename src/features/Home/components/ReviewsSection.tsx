import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import ReviewsCarousel from "./ReviewsCarousel";

const ReviewsSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="reviews-section-heading"
    >
      <Container
        className="flex flex-col items-center justify-center relative z-2"
        alignRight
      >
        <Text as="h2" className="max-w-4xl">
          Powering
          <Text as="span" variant="h2" textColor="primary">
            AI Breakthroughs
          </Text>
          Across Industries
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-2xl mt-2.5"
        >
          From startups building their first models to enterprises deploying AI
          at scale, teams choose NeevCloud for reliable performance and
          transparent operations.
        </Text>
      </Container>
      <ReviewsCarousel />
    </section>
  );
};

export default ReviewsSection;
