import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { ENTERPRISE_SECURITY_CATEGORIES } from "../data/enterprise-section-data";
import { EnterpriseSecurityCard } from "./EnterpriseSecurityCard";
const EnterpriseSection = () => {
  return (
    <section className="relative bg-white py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" align="center" className="max-w-4xl">
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
        <div className="grid w-full grid-cols-1 gap-5 pt-4 md:grid-cols-2 md:pt-12.5">
          {ENTERPRISE_SECURITY_CATEGORIES.map((category) => (
            <EnterpriseSecurityCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default EnterpriseSection;
