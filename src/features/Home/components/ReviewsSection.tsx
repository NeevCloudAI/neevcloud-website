import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
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
          <Text as="h2" weight="semibold" className="max-w-4xl">
            Powering
            <Text as="span" variant="h2" textColor="primary">
              AI Breakthroughs
            </Text>
            Across Industries
          </Text>
          <Text as="h6" align="center" className="mt-2 max-w-2xl">
            From startups building their first models to enterprises deploying
            AI at scale, teams choose NeevCloud for reliable performance and
            transparent operations.{" "}
          </Text>
        </header>
      </Container>
      <ReviewsCarousel />
    </section>
  );
};

export default ReviewsSection;
