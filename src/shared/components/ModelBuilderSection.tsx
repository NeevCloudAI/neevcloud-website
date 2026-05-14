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
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full  md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100"></div>
      <div className="pointer-events-none absolute inset-0 z-1 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" weight={"semibold"}>
          {MODEL_BUILDER_COPY.titlePrefix}
        </Text>
        <Text as="h2" textColor="primary" weight={"semibold"}>
          {MODEL_BUILDER_COPY.titleHighlight}
          <Text as="span" variant="h2" textColor="white" weight={"semibold"}>
            {MODEL_BUILDER_COPY.titleSuffix}
          </Text>
        </Text>
        <Text
          textColor="gray-10"
          align={"center"}
          className="mt-2 block md:hidden"
        >
          {MODEL_BUILDER_COPY.description1} {MODEL_BUILDER_COPY.description2}
        </Text>

        <Text
          textColor="gray-10"
          align={"center"}
          className="mt-2 hidden md:block"
        >
          {MODEL_BUILDER_COPY.description1}
        </Text>
        <Text textColor="gray-10" align={"center"} className="hidden md:block">
          {MODEL_BUILDER_COPY.description2}
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
