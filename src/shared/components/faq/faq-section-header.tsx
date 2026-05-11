import { Text } from "@/shared/ui-lib";

export default function FaqSectionHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-2">
        <Text as="h2" weight="semibold" textColor="white">
          Frequently asked
          <Text as="span" variant="h2" weight="semibold" textColor="primary">
            Question
          </Text>
        </Text>
      </div>
      <Text textColor="white">
        Everything you need to know before launching.
      </Text>
    </header>
  );
}
