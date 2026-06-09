import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  EXPERIENCE_CTA_CARDS,
  EXPERIENCE_CTA_SECTION,
  EXPERIENCE_ITEMS,
  EXPERIENCE_SECTION,
} from "../data/experience-section.data";
import LinkComponent from "@/shared/ui-lib/link";

const ExperienceSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="arena-experience-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="arena-experience-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          {EXPERIENCE_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {EXPERIENCE_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          {EXPERIENCE_SECTION.description}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 mt-4 md:grid-cols-3 md:mt-12.5">
          {EXPERIENCE_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>

        <div className="mt-4 md:mt-12.5 bg-black p-4 md:p-10 w-full rounded-md">
          <Text as="h3" textColor="white" align="center" weight="semibold">
            {EXPERIENCE_CTA_SECTION.titlePrefix}
            <Text as="span" textColor="primary" variant="h3" weight="semibold">
              {EXPERIENCE_CTA_SECTION.titleHighlight}
            </Text>
          </Text>
          <ul className="grid list-none grid-cols-1 gap-5 p-0 m-0 mt-4 md:grid-cols-3 md:mt-12.5">
            {EXPERIENCE_CTA_CARDS.map((card) => (
              <li key={card.id} className="rounded-md bg-gray-120 p-4 md:p-10">
                <Text as="h3" textColor="white" weight="semibold">
                  {card.title}
                </Text>
                <Text
                  as="h6"
                  textColor="white"
                  weight="semibold"
                  className="mt-2.5 mb-5 md:mb-10"
                >
                  {card.description}
                </Text>
                <LinkComponent
                  href={card.primaryCtaRoute}
                  target={card.primaryCtaTarget}
                >
                  {card.primaryCtaLabel}
                </LinkComponent>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-center gap-5">
            <Text
              as="h6"
              textColor="white"
              align="center"
              className="mt-4 md:mt-7.5"
            >
              {EXPERIENCE_CTA_SECTION.footerText}
            </Text>
            <LinkComponent
              href={EXPERIENCE_CTA_SECTION.footerButtonRoute}
              variant="white"
              spacing="lg"
            >
              {EXPERIENCE_CTA_SECTION.footerButtonLabel}
            </LinkComponent>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
