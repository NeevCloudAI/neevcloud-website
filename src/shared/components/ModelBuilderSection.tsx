import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  MODEL_BUILDER_COPY,
  MODEL_BUILDER_FEATURES,
} from "@/shared/constants/model-builder-section.constants";
import RuntimeTabs from "@/shared/components/RuntimeTabs";

const ModelBuilderSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] md:h-[75%] top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100"></div>
      <div className="pointer-events-none absolute inset-0 z-1 bg-radial-[at_50%_50%] from-teal-300/30 via-transparent to-transparent blur-xs scale-85"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          textColor="white"
          weight="semibold"
          align="center"
          className="max-w-4xl"
        >
          The AI cloud built for
          <Text as="span" textColor="primary" weight="semibold" variant="h2">
            Frontier
          </Text>
          model builders.
        </Text>
        <Text textColor="gray-10" align="center" className="max-w-xl">
          {MODEL_BUILDER_COPY.description}
        </Text>

        <div className="w-full flex flex-col items-center md:flex-row gap-4 mt-4 md:mt-8">
          <aside className="flex-1 space-y-6 md:space-y-8">
            {MODEL_BUILDER_FEATURES.map((feature) => (
              <div key={feature.title} className="space-y-1 md:space-y-2">
                <Text as="h3" textColor="white" weight="semibold">
                  {feature.title}
                </Text>
                <Text textColor="white">{feature.description}</Text>
              </div>
            ))}
          </aside>

          <div className="w-full flex-2 space-y-4">
            <header className="space-y-1 md:space-y-2"></header>
            <RuntimeTabs />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ModelBuilderSection;
