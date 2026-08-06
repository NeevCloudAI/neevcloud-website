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
          ? "bg-primary text-cloud-gray px-4 py-1 rounded-full"
          : "bg-black/32 text-cloud-gray px-4 py-1 rounded-full"
      }
    >
      {tag.text}
    </Text>
  );
};

export default UseCaseTag;
