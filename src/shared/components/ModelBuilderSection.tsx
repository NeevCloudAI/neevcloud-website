import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import RuntimeTabs from "./RuntimeTabs";
import {
  CodeToken,
  RuntimeTab,
} from "@/shared/types/model-builder-section.types";

export interface ModelFeature {
  title: string;
  description: string;
}

export interface ModelBuilderCopy {
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description1: string;
  description2: string;
  terminalPath: string;
}

export interface ModelBuilderSectionProps {
  copy: ModelBuilderCopy;
  features: ModelFeature[];
  tabs: RuntimeTab[];
  cliCodeLines: CodeToken[][];
  runtimeCode: Partial<Record<Exclude<RuntimeTab, "CLI">, string[]>>;
  showCopy?: boolean;
}

const ModelBuilderSection = ({
  copy,
  features,
  tabs,
  cliCodeLines,
  runtimeCode,
  showCopy,
}: ModelBuilderSectionProps) => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]">
      <div className="absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100" />
      <div className="absolute inset-0 z-1 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl" />

      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" weight="semibold">
          {copy.titlePrefix}
        </Text>
        <Text as="h2" textColor="primary" weight="semibold">
          {copy.titleHighlight}
          <Text as="span" variant="h2" textColor="white" weight="semibold">
            {copy.titleSuffix}
          </Text>
        </Text>

        <Text
          textColor="gray-10"
          align="center"
          className="mt-2 block md:hidden"
        >
          {copy.description1} {copy.description2}
        </Text>
        <Text
          textColor="gray-10"
          align="center"
          className="mt-2 hidden md:block"
        >
          {copy.description1}
        </Text>
        <Text textColor="gray-10" align="center" className="hidden md:block">
          {copy.description2}
        </Text>

        <div className="w-full flex flex-col items-center md:flex-row gap-4 mt-4 md:mt-8">
          <aside className="flex-1 space-y-6 md:space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-1 md:space-y-2">
                <Text as="h3" textColor="white" weight="semibold">
                  {feature.title}
                </Text>
                <Text textColor="white">{feature.description}</Text>
              </div>
            ))}
          </aside>

          <div className="w-full flex-2 space-y-4">
            <header className="space-y-1 md:space-y-2" />
            <RuntimeTabs
              tabs={tabs}
              cliCodeLines={cliCodeLines}
              runtimeCode={runtimeCode}
              terminalPath={copy.terminalPath}
              showCopy={showCopy}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ModelBuilderSection;
