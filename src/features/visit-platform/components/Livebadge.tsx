import { Text } from "@/shared/ui-lib";
type LiveBadgeProps = {
  label?: string;
};

const LiveBadge = ({ label = "live" }: LiveBadgeProps) => {
  return (
    <div className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1">
      <Text as="small" className="h-1 w-1 rounded-full bg-white" />
      <Text as="small" textColor="white">
        {label}
      </Text>
    </div>
  );
};

export default LiveBadge;
