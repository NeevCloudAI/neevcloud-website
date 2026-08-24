import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { AI_SUPERCLUSTERS_COMPLIANCE_TILES } from "../data/compliance.data";

const ComplianceSection = () => {
  return (
    <section className="relative bg-black py-8 md:py-16 2xl:py-25">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div>
          <Text as="small" textColor="primary" weight="semibold" className="uppercase tracking-wide">
            AI Gigacampus
          </Text>
          <Text as="h2" weight="semibold" textColor="white" className="mt-2.5">
            One AI Gigacampus.{" "}
            <Text as="span" variant="h2" textColor="primary" weight="semibold">
              Scalable by design.
            </Text>
          </Text>
          <Text as="h6" textColor="gray-01" className="mt-2.5">
            Every byte of training data, every model weight, every inference call
            stays inside Indian borders — audited under DPDP 2023 and aligned
            with the IndiaAI Mission.
          </Text>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {AI_SUPERCLUSTERS_COMPLIANCE_TILES.map((tile) => (
            <div
              key={tile.title}
              className="rounded-md border border-white/12 bg-white/6 p-4 backdrop-blur-md"
            >
              <Text as="h6" weight="semibold" textColor="white">
                {tile.title}
              </Text>
              <Text as="small" textColor="gray-80">
                {tile.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ComplianceSection;
