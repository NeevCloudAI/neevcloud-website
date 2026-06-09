import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import LinkComponent from "@/shared/ui-lib/link";
import {
  DEVELOPERS_TUTORIAL_CARDS,
  DEVELOPERS_TUTORIALS_SECTION,
} from "../data/tutorials-section.data";
import DevelopersTutorialCard from "./tutorials/DevelopersTutorialCard";

const DevelopersTutorialsSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="developers-tutorials-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="developers-tutorials-section-heading"
          align="center"
          className="max-w-xl"
        >
          {DEVELOPERS_TUTORIALS_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {DEVELOPERS_TUTORIALS_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          {DEVELOPERS_TUTORIALS_SECTION.description}
        </Text>

        <ul className="m-0 mt-4 grid w-full list-none grid-cols-1 gap-5 p-0 md:mt-12.5 md:grid-cols-2">
          {DEVELOPERS_TUTORIAL_CARDS.map((card) => (
            <li key={card.id}>
              <DevelopersTutorialCard card={card} />
            </li>
          ))}
        </ul>

        <LinkComponent
          href={DEVELOPERS_TUTORIALS_SECTION.viewAllCtaRoute}
          target={DEVELOPERS_TUTORIALS_SECTION.viewAllCtaTarget}
          spacing="lg"
          className="mt-4 md:mt-12.5"
        >
          {DEVELOPERS_TUTORIALS_SECTION.viewAllCta}
        </LinkComponent>
      </Container>
    </section>
  );
};

export default DevelopersTutorialsSection;
