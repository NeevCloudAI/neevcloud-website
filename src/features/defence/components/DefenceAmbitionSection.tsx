import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { DEFENCE_AMBITION_ITEMS } from "../data/ambition-section.data";
import { Text } from "@/shared/ui-lib";

const DefenceAmbitionSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="defence-ambition-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="defence-ambition-section-heading"
          textColor="black"
          align="center"
          className="max-w-2xl"
        >
          Indigenous Infrastructure for
          <Text as="span" variant="h2" textColor="primary">
            National Security
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          Strategic and defence applications demand infrastructure that operates
          entirely within national boundaries, under Indian jurisdiction, with
          complete independence from foreign providers. NeevCloud provides
          sovereign AI compute designed for these requirements.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:items-stretch md:pt-12.5">
          {DEFENCE_AMBITION_ITEMS.map((item) => (
            <li key={item.id} className="h-full">
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default DefenceAmbitionSection;
