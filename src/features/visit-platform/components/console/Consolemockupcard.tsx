import LiveBadge from "./Livebadge";
import { Text } from "@/shared/ui-lib";

type ConsoleMockupCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * White rounded card used as the outer shell for all console tab mockups.
 * Contains a header row with title + live badge.
 */
const ConsoleMockupCard = ({
  title,
  children,
  className = "",
}: ConsoleMockupCardProps) => {
  return (
    <div className={`w-full rounded-xl bg-white pt-7.5 shadow-sm ${className}`}>
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
