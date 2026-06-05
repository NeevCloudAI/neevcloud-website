import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import type { StatsGridSectionProps } from "../types/stats-grid-section.types";

const StatsGridSection = ({
  sectionId,
  heading,
  headingHighlight,
  highlightPosition = "after",
  cards,
}: StatsGridSectionProps) => {
  return (
    <section
      className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby={sectionId}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id={sectionId}
          textColor="white"
          align="center"
          className="max-w-3xl"
        >
          {highlightPosition === "before" && headingHighlight && (
            <Text as="span" variant="h2" textColor="primary">
              {headingHighlight}{" "}
            </Text>
          )}
          {heading}
          {highlightPosition === "after" && headingHighlight && (
            <Text as="span" variant="h2" textColor="primary">
              {" "}
              {headingHighlight}
            </Text>
          )}
        </Text>

        <ul
          className="mt-6 md:mt-12.5 grid w-full list-none grid-cols-1 gap-4 p-0 m-0 md:grid-cols-3"
          aria-label="Grid cards"
        >
          {cards.map((card) => (
            <li
              key={card.id}
              className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-5 md:p-7.5"
            >
              {card.variant === "feature" ? (
                <>
                  <Image
                    src={card.icon}
                    alt=""
                    aria-hidden="true"
                    width={32}
                    height={32}
                  />
                  <Text as="h3" textColor="white" weight="semibold" className="md:pt-6 md:pb-2.5">
                    {card.title}
                  </Text>
                  <Text as="h6" textColor="gray-10">
                    {card.description}
                  </Text>
                </>
              ) : (
                <>
                  <Text as="small" textColor="gray-75">
                    {card.label}
                  </Text>
                  <Text as="h2" textColor="white" weight="semibold">
                    {card.stat}
                  </Text>
                  <Text as="h6" textColor="gray-10">
                    {card.description}
                  </Text>
                </>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default StatsGridSection;
