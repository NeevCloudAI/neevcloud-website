import Image from "next/image";
import { Text } from "@/shared/ui-lib";

export type MegaMenuLinkRowProps = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

export default function MegaMenuLinkRow({
  iconSrc,
  iconAlt,
  title,
  description,
}: MegaMenuLinkRowProps) {
  return (
    <div className="mt-6 flex items-center gap-2">
      <div className="flex h-10 min-w-10 items-center justify-center rounded-sm bg-gray-60">
        {iconSrc && (
          <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-1 whitespace-normal md:whitespace-nowrap">
        <Text weight="semibold">{title}</Text>
        <Text as="small" textColor="gray-75">
          {description}
        </Text>
      </div>
    </div>
  );
}
