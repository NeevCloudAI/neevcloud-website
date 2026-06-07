import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  ENTERPRISE_STANDARDS_ITEMS,
  ENTERPRISE_STANDARDS_SECTION,
} from "../data/enterprise-standards-section.data";

const EnterpriseStandardsSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="enterprise-standards-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="enterprise-standards-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          {ENTERPRISE_STANDARDS_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {ENTERPRISE_STANDARDS_SECTION.titleHighlight}
          </Text>
          {ENTERPRISE_STANDARDS_SECTION.titleSuffix}
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          {ENTERPRISE_STANDARDS_SECTION.description}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:pt-12.5">
          {ENTERPRISE_STANDARDS_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default EnterpriseStandardsSection;
