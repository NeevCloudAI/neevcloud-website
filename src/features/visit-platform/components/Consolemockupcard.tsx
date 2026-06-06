import LiveBadge from "./Livebadge";
import { Text } from "@/shared/ui-lib";

type ConsoleMockupCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const ConsoleMockupCard = ({
  title,
  children,
  className = "",
}: ConsoleMockupCardProps) => {
  return (
    <div
      className={`w-full rounded-xl bg-white pt-6 md:pt-7.5 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between px-7.5">
        <Text as="h5" className="font-semibold uppercase">
          {title}
        </Text>
        <LiveBadge />
      </div>
      {children}
    </div>
  );
};

export default ConsoleMockupCard;
