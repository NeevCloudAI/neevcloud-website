import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { MEDIA_AMBITION_ITEMS } from "../data/ambition-section.data";
import { Text } from "@/shared/ui-lib";

const MediaAmbitionSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="media-ambition-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="media-ambition-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Why
          <Text as="span" variant="h2" textColor="primary">
            Media Studios
          </Text>
          Choose NeevCloud
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black/82"
          className="max-w-3xl mt-2.5"
        >
          {`High-resolution rendering, complex simulations, and real-time previews require infrastructure that delivers performance without the overhead of managing on-premise hardware. NeevCloud provides GPU compute optimized for media and VFX production.`}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:pt-12.5">
          {MEDIA_AMBITION_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default MediaAmbitionSection;
