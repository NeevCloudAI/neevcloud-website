import { Text } from "@/shared/ui-lib";
import type { UseCaseTag as UseCaseTagType } from "../types/use-cases-section.types";

type UseCaseTagProps = {
  tag: UseCaseTagType;
};

const UseCaseTag = ({ tag }: UseCaseTagProps) => {
  return (
    <Text
      className={
        tag.variant === "primary"
          ? "bg-primary text-white px-4 py-1 rounded-full"
          : "bg-gray-70 text-white px-4 py-1 rounded-full"
      }
    >
      {tag.text}
    </Text>
  );
};

export default UseCaseTag;
