import Image from "next/image";
import Link from "next/link";
import { Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";

export type MegaMenuLinkRowProps = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export default function MegaMenuLinkRow({
  iconSrc,
  iconAlt,
  title,
  description,
  href,
  target,
}: MegaMenuLinkRowProps) {
  const rowClassName = cn(
    "p-2 mt-2 flex items-center gap-2 rounded-md",
    href &&
      "p-2 outline-offset-2 transition-colors hover:bg-cloud-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
  );

  const content = (
    <>
      <div className="flex h-10 min-w-10 items-center justify-center rounded-sm bg-gray-01">
        {iconSrc && (
          <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-1 whitespace-normal md:whitespace-nowrap">
        <Text weight="semibold">{title}</Text>
        <Text as="small" textColor="gray-04">
          {description}
        </Text>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={rowClassName} target={target}>
        {content}
      </Link>
    );
  }

  return <div className={rowClassName}>{content}</div>;
}
