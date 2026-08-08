import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { Gift } from "@/shared/icons/lucide-icon-map";
import Image from "next/image";
import { OFFERS_ARCHITECTURE_SECTION_ITEMS } from "../data/offers-architecture-section.data";

type OffersArchitectureItem =
  (typeof OFFERS_ARCHITECTURE_SECTION_ITEMS)[number];

const OffersArchitectureItem = ({ item }: { item: OffersArchitectureItem }) => {
  return (
    <article className="flex h-full flex-col rounded-md bg-white p-4 md:p-10">
      <div className="p-3.5 bg-primary/15 rounded-md w-fit">
        <Image src={item.iconSrc} alt={item.iconAlt} width={22} height={22} />
      </div>
      <Text as="h3" weight="semibold" className="mt-5">
        {item.title}
      </Text>
      <Text as="h6" textColor="black/82" className="mt-5">
        {item.description}
      </Text>
    </article>
  );
};

const OffersArchitectureSection = () => {
  return (
    <section
      className="relative bg-cloud-gray pb-8 md:py-16 2xl:py-25"
      aria-labelledby="offers-architecture-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <div className="bg-primary-90/6 p-1 rounded-md border border-primary-160 shadow-sm px-2.5 py-1.5 flex items-center gap-2">
          <Gift className="size-3.5 text-primary-90" />
          <Text as="small" textColor="primary-90">
            Independence Day Special
          </Text>
        </div>
        <Text
          as="h2"
          id="offers-architecture-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl mt-5"
        >
          Where Your Free Credits
          <Text as="span" variant="h2" textColor="primary">
            Actually Get Used
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black/82"
          className="max-w-3xl mt-2.5"
        >
          {`Your ₹15,000 credit covers the CPU compute that keeps your AI stack running - preprocessing, serving, APIs, and databases.`}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 mt-4 md:grid-cols-2 md:mt-12.5">
          {OFFERS_ARCHITECTURE_SECTION_ITEMS.map((item) => (
            <li key={item.id}>
              <OffersArchitectureItem item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default OffersArchitectureSection;
