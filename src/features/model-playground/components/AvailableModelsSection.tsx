import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { Languages } from "lucide-react";

const AvailableModelsSection = () => {
  return (
    <section className="relative bg-white py-[3vh] md:py-[10vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" weight={"semibold"} align="center">
          Available Models
          <Text as="span" variant="h2" textColor="primary" weight={"semibold"}>
            Across Categories
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black" className="mt-2">
          Access a curated collection of state-of-the-art models spanning
          language understanding, computer vision, audio processing, and
          specialized domains. Each model includes interactive demos and clear
          documentation.
        </Text>
        <div>
          <div className="w-full bg-gray-10 p-4 md:p-8">
            <div className="p-3 bg-white w-fit rounded-md">
              <Languages size={30} className="shrink-0 text-primary pr-1" />
            </div>
            <Text as="h5">Text · Language</Text>

            <Text as="h3" weight="semibold">
              Language
            </Text>
            <Text as="h6">
              Generate text, answer questions, summarize documents, and
              understand context across 100+ languages.
            </Text>
            <ul className="flex list-none flex-col gap-1.5 mt-4 md:mt-8">
              <li className="flex gap-2 rounded-md bg-white px-4 py-2">
                <Text as="h6" textColor="primary" className="shrink-0">
                  •
                </Text>
                <Text as="h6" textColor="gray-90">
                  GPT-style models for open-ended generation
                </Text>
              </li>
              <li className="flex gap-2 rounded-md bg-white px-4 py-2">
                <Text as="h6" textColor="primary" className="shrink-0">
                  •
                </Text>
                <Text as="h6" textColor="gray-90">
                  Instruction-tuned models for task completion
                </Text>
              </li>
              <li className="flex gap-2 rounded-md bg-white px-4 py-2">
                <Text as="h6" textColor="primary" className="shrink-0">
                  •
                </Text>
                <Text as="h6" textColor="gray-90">
                  Specialized models for code generation
                </Text>
              </li>
              <li className="flex gap-2 rounded-md bg-white px-4 py-2">
                <Text as="h6" textColor="primary" className="shrink-0">
                  •
                </Text>
                <Text as="h6" textColor="gray-90">
                  Multilingual models supporting 100+ languages{" "}
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AvailableModelsSection;
