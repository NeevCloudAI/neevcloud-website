import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  MODEL_BUILDER_COPY,
  MODEL_BUILDER_FEATURES,
} from "@/shared/constants/model-builder-section.constants";
import RuntimeTabs from "@/shared/components/RuntimeTabs";

const ModelBuilderSection = () => {
  return (
    <section className="relative bg-black py-8 md:py-16 2xl:py-25">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] md:h-[75%] top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" align="center" className="max-w-4xl">
          The AI cloud built for
          <Text as="span" textColor="primary" variant="h2">
            Frontier
          </Text>
          model builders.
        </Text>
        <Text
          as="h6"
          textColor="gray-10"
          align="center"
          className="max-w-2xl mt-2.5"
        >
          {MODEL_BUILDER_COPY.description}
        </Text>

        <div className="w-full flex flex-col items-center md:flex-row gap-4 mt-4 md:mt-12.5">
          <aside className="flex-1 flex flex-col gap-4 md:gap-12.5">
            {MODEL_BUILDER_FEATURES.map((feature) => (
              <div key={feature.title}>
                <Text as="h3" textColor="white" weight="semibold">
                  {feature.title}
                </Text>
                <Text as="h6" textColor="white" className="mt-2.5">
                  {feature.description}
                </Text>
              </div>
            ))}
          </aside>

          <RuntimeTabs />
        </div>
      </Container>
    </section>
  );
};

export default ModelBuilderSection;
