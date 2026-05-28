import { Text } from "@/shared/ui-lib";

type FaqSectionHeaderProps = {
  description?: string;
};

export default function FaqSectionHeader({
  description = "Everything you need to know before launching.",
}: FaqSectionHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-2">
        <Text as="h2" textColor="white" className="max-w-4xl">
          Frequently asked
          <Text as="span" variant="h2" textColor="primary">
            Question
          </Text>
        </Text>
      </div>
      <Text as="h6" textColor="gray-10" className="mt-2.5">
        {description}
      </Text>
    </header>
  );
}
