import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import StatsByNumbersCard from "@/shared/components/stats-by-numbers-card";
import type { StatsByNumbersSectionProps } from "@/shared/types/stats-by-numbers.types";
import { Text } from "@/shared/ui-lib";

const StatsByNumbersSection = ({
  sectionId,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  items,
  className,
}: StatsByNumbersSectionProps) => {
  return (
    <section
      className={cn("relative bg-black py-8 md:py-16 2xl:py-25", className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full  md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center justify-center">
        <Text
          as="h2"
          id={`${sectionId}-heading`}
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          {titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {titleHighlight}
          </Text>
          {titleSuffix}
        </Text>

        <ul className="m-0 mt-4 grid w-full list-none grid-cols-1 gap-5 p-0 md:mt-12.5 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <StatsByNumbersCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default StatsByNumbersSection;
