import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { resolveLucideIcon } from "@/shared/icons/lucide-icon-map";
import { OFFERS_PRICING_SECTION_ITEMS } from "../data/offers-pricing-section.data";

type OffersPricingItem = (typeof OFFERS_PRICING_SECTION_ITEMS)[number];

const OffersPricingItem = ({ item }: { item: OffersPricingItem }) => {
  const Icon = resolveLucideIcon(item.icon);
  return (
    <div className="flex flex-col items-center gap-2 rounded-md border border-white/12 bg-white/6 p-5 text-center md:p-7.5">
      <Icon className="size-5 text-primary" />
      <Text as="h3" weight="semibold" textColor="white">
        {item.value}
      </Text>
      <Text as="h6" textColor="gray-04">
        {item.label}
      </Text>
    </div>
  );
};

const OffersPricingSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="offers-pricing-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="offers-pricing-section-heading"
          align="center"
          textColor="primary"
          className="max-w-4xl"
        >
          Simple, Transparent
          <Text as="span" variant="h2" textColor="white">
            Offer Pricing
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="gray-04"
          align="center"
          className="mt-2.5 max-w-3xl"
        >
          No hidden fees. Use your free credit, then pay only for what you use.
        </Text>

        <div className="mt-4 grid w-full grid-cols-2 gap-4 md:mt-12.5 md:grid-cols-3">
          {OFFERS_PRICING_SECTION_ITEMS.map((item) => (
            <OffersPricingItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OffersPricingSection;
