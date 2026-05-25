import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import { MODELS } from "@/features/serverless-inference/data/models-section-data";
import ModelCard from "./ModelCard";

const ModelsSection = () => {
  return (
    <section className="relative bg-white py-8 md:py-16 2xl:py-25 bg-glow-terminal">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" align="center" className="max-w-4xl">
          20+ Models. One Endpoint.
          <Text as="span" variant="h2" textColor="primary">
            Billed in INR
          </Text>
        </Text>

        <Text as="h6" align="center" textColor="black-5" className="max-w-3xl">
          From Kimi K2 to Llama 3 405B to GLM 4.5, every model runs on
          NeevCloud&apos;s GPU clusters in India and is served through a unified
          API. Switch models with a single parameter change.
        </Text>
        <div className="mt-4 md:mt-12.5 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {MODELS.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>
        <Button className="mt-4 md:mt-12.5" variant="black" spacing="lg">
          See ALL Models
        </Button>
      </Container>
    </section>
  );
};

export default ModelsSection;
