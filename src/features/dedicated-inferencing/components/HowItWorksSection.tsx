import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { Server } from "@/shared/icons/lucide-icon-map";
import { DEDICATED_INFERENCING_STEPS } from "../data/how-it-works-section.data";

const HowItWorksSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="dedicated-inferencing-how-it-works-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="dedicated-inferencing-how-it-works-heading"
          textColor="white"
          align="center"
        >
          How It
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Works
          </Text>
        </Text>

        <ol className="w-full mt-4 md:mt-12.5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 list-none p-0 m-0">
          {DEDICATED_INFERENCING_STEPS.map((step) => (
            <li
              key={step.number}
              className="flex flex-col items-center gap-2.5 text-center"
            >
              <div className="flex size-10 md:size-12 shrink-0 items-center justify-center rounded-full bg-primary">
                <Text as="h4" weight="semibold" textColor="white">
                  {step.number}
                </Text>
              </div>
              <Text as="h6" textColor="cloud-gray">
                {step.label}
              </Text>
            </li>
          ))}
        </ol>

        <article className="w-full mt-6 md:mt-12.5 flex gap-2.5 rounded-md bg-white p-4 md:p-7.5">
          <Server className="text-primary size-8" strokeWidth={1.5} />
          <div className="flex flex-col gap-2.5">
            <Text as="h3" weight="semibold">
              Bring Your Own or Use the Catalogue
            </Text>
            <Text as="h6" textColor="gray-05">
              Choose a model from the Model Catalogue or bring your own Hugging
              Face model. NeevCloud recommends a GPU configuration for validated
              models, then provisions the deployment and moves it from In
              Progress to Running.
            </Text>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
