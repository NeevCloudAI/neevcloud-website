import Container from "@/shared/components/container";
import { Text, LinkComponent } from "@/shared/ui-lib";
import { ArrowRight } from "@/shared/icons/lucide-icon-map";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

const BillingCtaSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="dedicated-inferencing-billing-heading"
    >
      <Container className="flex flex-col items-center text-center">
        <Text
          as="h2"
          id="dedicated-inferencing-billing-heading"
          textColor="black"
          align="center"
        >
          Simple, Transparent
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Billing
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="black"
          align="center"
          className="mt-2.5 max-w-2xl"
        >
          Billing starts when provisioning begins and stops when you delete the
          deployment. You pay for the reserved GPU instance by the hour, not per
          request, so high-throughput workloads become more predictable and
          cost-effective.
        </Text>
        <LinkComponent
          href={EXTERNAL_LINKS.inferenceDocs}
          target="_blank"
          variant="ghost"
          textColor="primary"
          spacing="lg"
          className="mt-4 md:mt-7.5 inline-flex items-center gap-2 border border-primary"
        >
          Read the Full Guide
          <ArrowRight size={16} />
        </LinkComponent>
      </Container>
    </section>
  );
};

export default BillingCtaSection;
