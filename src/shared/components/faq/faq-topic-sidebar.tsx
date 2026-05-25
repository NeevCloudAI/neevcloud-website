import type {
  FaqTopic,
  FaqTopicSummary,
} from "@/shared/data/faq-section-types";
import { Button, Text } from "@/shared/ui-lib";

type FaqTopicSidebarProps = {
  topics: readonly FaqTopicSummary[];
  activeTopic: FaqTopic;
  onTopicChange: (topic: FaqTopic) => void;
};

export default function FaqTopicSidebar({
  topics,
  activeTopic,
  onTopicChange,
}: FaqTopicSidebarProps) {
  return (
    <aside className="md:min-w-90 z-20">
      <Text as="h4" textColor="primary-70">
        TOPICS
      </Text>
      <ul className="flex flex-col gap-2 mt-4 md:mt-7.5">
        {topics.map(({ label, count }) => {
          const isActive = activeTopic === label;
          return (
            <li key={label}>
              <Button
                variant="ghost"
                size="full"
                onClick={() => onTopicChange(label)}
                aria-pressed={isActive}
                className={`border border-white-10 flex items-center justify-between px-5 py-4 rounded-xl ${isActive ? "bg-gray-125" : "bg-black-80"}`}
              >
                <Text as="h4" weight="semibold">
                  {label}
                </Text>
                <Text
                  as="h6"
                  className={`px-4 rounded-xl ${isActive ? "bg-white text-black" : "bg-gray-90 text-gray-60 border border-gray-60"}`}
                >
                  {count}
                </Text>
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
