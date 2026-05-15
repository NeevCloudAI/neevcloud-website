import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import { MODELS } from "@/features/serverless-inference/data/models-section-data";
import ModelCard from "./ModelCard";

const ModelsSection = () => {
  return (
    <section className="relative bg-white py-[3vh] md:py-[10vh] bg-glow-terminal">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" weight="semibold" align="center" className="max-w-4xl">
          20+ Models. One Endpoint.
          <Text as="span" variant="h2" weight="semibold" textColor="primary">
            Billed in INR
          </Text>
        </Text>

        <Text align="center" className="mt-2 max-w-2xl">
          From Kimi K2 to Llama 3 405B to GLM 4.5, every model runs on
          NeevCloud&apos;s GPU clusters in India and is served through a unified
          API. Switch models with a single parameter change.
        </Text>
        <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {MODELS.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>
        <Button className="mt-4 md:mt-8" variant="black" spacing="lg">
          See ALL Models
        </Button>
      </Container>
    </section>
  );
};

export default ModelsSection;
