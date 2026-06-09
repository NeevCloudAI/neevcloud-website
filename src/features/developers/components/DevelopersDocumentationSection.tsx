import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import LinkComponent from "@/shared/ui-lib/link";
import {
  DEVELOPERS_DOCUMENTATION_CATEGORIES,
  DEVELOPERS_DOCUMENTATION_SECTION,
} from "../data/documentation-section.data";
import DevelopersDocumentationSearchClient from "./documentation/DevelopersDocumentationSearchClient";

const DevelopersDocumentationSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="developers-documentation-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="developers-documentation-section-heading"
          align="center"
          className="max-w-4xl"
        >
          {DEVELOPERS_DOCUMENTATION_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {DEVELOPERS_DOCUMENTATION_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          {DEVELOPERS_DOCUMENTATION_SECTION.description}
        </Text>

        <DevelopersDocumentationSearchClient
          categories={DEVELOPERS_DOCUMENTATION_CATEGORIES}
          searchPlaceholder={DEVELOPERS_DOCUMENTATION_SECTION.searchPlaceholder}
          noMatchesLabel={DEVELOPERS_DOCUMENTATION_SECTION.noMatchesLabel}
        />

        <LinkComponent
          href={DEVELOPERS_DOCUMENTATION_SECTION.browseCtaRoute}
          target={DEVELOPERS_DOCUMENTATION_SECTION.browseCtaTarget}
          spacing="lg"
          className="mt-4 md:mt-12.5"
        >
          {DEVELOPERS_DOCUMENTATION_SECTION.browseCta}
        </LinkComponent>
      </Container>
    </section>
  );
};

export default DevelopersDocumentationSection;
