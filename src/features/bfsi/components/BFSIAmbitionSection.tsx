import { BFSIAMBITION_ITEMS } from "@/features/bfsi/data/bfsi-ambition-section-data";
import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";

const BFSIAmbitionSection = () => {
  return (
    <section className="relative bg-gray-10 py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="black" align="center" className="max-w-4xl">
          Supporting
          <Text as="span" variant="h2" textColor="primary">
            {`India's AI`}
          </Text>
          Ambitions
        </Text>
        <Text as="h6" align="center" textColor="black-5" className="max-w-3xl">
          {`As India accelerates AI adoption across government, public services, and strategic sectors, infrastructure requirements extend beyond technical specifications to include sovereignty, compliance, and alignment with national development goals.`}
        </Text>
        <div className="grid w-full grid-cols-1 gap-5 pt-4 md:grid-cols-3 md:pt-12.5">
          {BFSIAMBITION_ITEMS.map((item) => (
            <AmbitionDetailCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BFSIAmbitionSection;
