import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import { INFRASTRUCTURE_SECTION } from "../data/infrastructure-section.data";

const InfrastructureSection = () => {
  return (
    <section
      className="relative bg-white pb-8 md:pb-16 2xl:pb-25"
      aria-labelledby="about-infrastructure-section-heading"
    >
      <Container>
        <Text
          as="h2"
          id="about-infrastructure-section-heading"
          className="sr-only"
        >
          Infrastructure overview
        </Text>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <div className="flex flex-col gap-5 md:gap-7.5">
              {INFRASTRUCTURE_SECTION.paragraphs.map((paragraph) => (
                <Text key={paragraph} as="h6" textColor="black-5">
                  {paragraph}
                </Text>
              ))}
            </div>
            <ul className="mt-6 flex list-none flex-wrap gap-2.5 md:mt-20">
              {INFRASTRUCTURE_SECTION.tags.map((tag) => (
                <li key={tag}>
                  <Text
                    as="h6"
                    className="inline-block rounded-sm bg-gray-10 px-4 py-2 md:px-7.5 md:py-3"
                  >
                    {tag}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-72 w-full md:min-h-120">
            <Image
              src={INFRASTRUCTURE_SECTION.image}
              alt={INFRASTRUCTURE_SECTION.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InfrastructureSection;
