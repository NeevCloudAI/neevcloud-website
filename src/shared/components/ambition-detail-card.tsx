import { cn } from "@/lib/utils";
import { Divider, Text } from "@/shared/ui-lib";
import Image from "next/image";

export type AmbitionDetailBullet = {
  id: number;
  title: string;
};

export type AmbitionDetailItem = {
  id: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  bullets: readonly AmbitionDetailBullet[];
};

export type AmbitionDetailCardProps = {
  item: AmbitionDetailItem;
  className?: string;
};

export function AmbitionDetailCard({
  item,
  className,
}: AmbitionDetailCardProps) {
  const { label, iconSrc, iconAlt, title, description, bullets } = item;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-md bg-white p-4 md:px-7.5 md:py-10",
        className,
      )}
    >
      <Text textColor="gray-85">{label}</Text>
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={60}
        height={60}
        className="mt-2.5 self-end"
      />
      <Divider
        orientation="horizontal"
        className="my-5 rounded-md bg-gray-60"
      />
      <Text as="h3" weight="semibold">
        {title}
      </Text>
      <Text as="h6" textColor="gray-90" className="mt-2.5">
        {description}
      </Text>
      <ul className="mt-4 flex list-none flex-col gap-1.25 md:mt-10">
        {bullets.map((bullet) => (
          <li
            key={bullet.id}
            className="flex gap-2.5 rounded-md bg-gray-10 px-3.75 py-2.5"
          >
            <Text as="h6" textColor="primary" className="shrink-0">
              •
            </Text>
            <Text as="h6">{bullet.title}</Text>
          </li>
        ))}
      </ul>
    </article>
  );
}
