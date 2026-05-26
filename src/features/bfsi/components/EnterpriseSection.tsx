import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { ENTERPRISE_SECURITY_CATEGORIES } from "../data/enterprise-section.data";
import EnterpriseSecurityCard from "./enterprise/EnterpriseSecurityCard";

const EnterpriseSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="bfsi-enterprise-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="bfsi-enterprise-section-heading"
          align="center"
          className="max-w-4xl"
        >
          Enterprise security
          <Text as="span" variant="h2" textColor="primary">
            for BFSI.
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black-5" className="max-w-3xl">
          NeevCloud infrastructure meets enterprise security and compliance
          requirements for BFSI organizations with independently audited
          controls and data protection.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-2 md:pt-12.5">
          {ENTERPRISE_SECURITY_CATEGORIES.map((category) => (
            <li key={category.title}>
              <EnterpriseSecurityCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default EnterpriseSection;
