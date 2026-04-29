import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";

const StackSection = () => {
  return (
    <div className="bg-gray-10 py-[3vh] md:py-[7vh]">
      <Container className="flex flex-col items-center justify-between gap-2">
        <div className="flex justify-center w-full">
          <Text as="h2" weight="semibold" className="mr-2">
            One
          </Text>
          <Text as="h2" weight="semibold" textColor="primary">
            Vertical Stack
          </Text>
          <Text as="h2" weight="semibold">
            . Silicon to endpoint.
          </Text>
        </div>
        <Text as="h6">
          Deploy AI on infrastructure designed for scale, resilience, and speed.
        </Text>
      </Container>
    </div>
  );
};

export default StackSection;
