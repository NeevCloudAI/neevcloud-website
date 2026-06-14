import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  SECURITY_BY_DESIGN_ITEMS,
  SECURITY_BY_DESIGN_SECTION,
} from "../data/security-by-design-section.data";
import SecurityByDesignCard from "./SecurityByDesignCard";

const SecurityByDesignSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="security-by-design-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="security-by-design-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          {SECURITY_BY_DESIGN_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {SECURITY_BY_DESIGN_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black/82"
          className="mt-2.5 max-w-4xl"
        >
          {SECURITY_BY_DESIGN_SECTION.description}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:pt-12.5">
          {SECURITY_BY_DESIGN_ITEMS.map((item) => (
            <li key={item.id}>
              <SecurityByDesignCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default SecurityByDesignSection;
