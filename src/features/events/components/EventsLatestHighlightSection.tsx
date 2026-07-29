import Image from "next/image";
import Container from "@/shared/components/container";
import { Text, LinkComponent } from "@/shared/ui-lib";
import { resolveLucideIcon } from "@/shared/icons/lucide-icon-map";
import { LATEST_HIGHLIGHT_SECTION } from "../data/latest-highlight-section.data";

const EventsLatestHighlightSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="events-latest-highlight-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="events-latest-highlight-section-heading"
          align="center"
          weight="semibold"
          className="max-w-4xl"
        >
          {LATEST_HIGHLIGHT_SECTION.title}
        </Text>

        <div className="mt-4 flex w-full flex-col items-stretch overflow-hidden p-4 md:mt-12.5 md:flex-row md:items-center gap-8">
          <div className="flex flex-1 flex-col">
            <Text
              as="small"
              textColor="white"
              className="inline-flex w-fit items-center gap-1.5 rounded-md bg-deep-blue px-3.75 py-1.25"
            >
              <span aria-hidden="true">•</span>
              {LATEST_HIGHLIGHT_SECTION.badge}
            </Text>

            <Text as="h3" weight="semibold" className="mt-4 md:mt-7.5">
              {LATEST_HIGHLIGHT_SECTION.heading}
            </Text>

            <Text as="h6" textColor="gray-05" className="mt-2.5">
              {LATEST_HIGHLIGHT_SECTION.description}
            </Text>

            <ul className="m-0 mt-4 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 md:mt-7.5">
              {LATEST_HIGHLIGHT_SECTION.metadata.map((item) => {
                const Icon = resolveLucideIcon(item.icon);

                return (
                  <li key={item.id} className="flex items-center gap-1.75 ">
                    <Icon className="size-4 text-black" aria-hidden="true" />
                    <Text as="h6">{item.label}</Text>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-wrap gap-4 md:mt-12.5">
              <LinkComponent
                href={LATEST_HIGHLIGHT_SECTION.primaryCtaRoute}
                target={LATEST_HIGHLIGHT_SECTION.primaryCtaTarget}
                spacing="lg"
              >
                {LATEST_HIGHLIGHT_SECTION.primaryCta}
              </LinkComponent>
              {/* <LinkComponent
                href={LATEST_HIGHLIGHT_SECTION.secondaryCtaRoute}
                variant="outline"
                target={LATEST_HIGHLIGHT_SECTION.secondaryCtaTarget}
                spacing="lg"
              >
                {LATEST_HIGHLIGHT_SECTION.secondaryCta}
              </LinkComponent> */}
            </div>
          </div>

          <div className="relative w-full shrink-0 overflow-hidden rounded-lg md:w-[45%]">
            <Image
              src={LATEST_HIGHLIGHT_SECTION.image}
              alt={LATEST_HIGHLIGHT_SECTION.imageAlt}
              width={640}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventsLatestHighlightSection;
