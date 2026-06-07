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
  iconColor?: string;
  iconAlt: string;
  size?: "small" | "large";
  title: string;
  description: string;
  bulletsHeading?: string;
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
  const {
    label,
    iconSrc,
    iconColor,
    iconAlt,
    title,
    bulletsHeading,
    description,
    bullets,
    size = "large",
  } = item;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-md bg-white p-4 md:px-7.5 md:py-10",
        className,
      )}
    >
      <Text textColor="gray-85">{label}</Text>
      {size === "small" ? (
        <div className="flex items-center justify-end mt-2.5 mb-4">
          <div
            className={cn(
              "p-3 bg-primary-40 rounded-lg",
              iconColor && `bg-${iconColor}`,
            )}
          >
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={20}
              height={20}
              className="self-end"
            />
          </div>
        </div>
      ) : (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={60}
          height={60}
          className="mt-2.5 self-end"
        />
      )}

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
      {bulletsHeading && bullets.length > 0 ? (
        <Text as="h6" textColor="gray-85" className="mt-4 md:mt-10">
          {bulletsHeading}
        </Text>
      ) : null}
      {bullets.length > 0 ? (
        <ul
          className={cn(
            "flex list-none flex-col gap-1.25",
            bulletsHeading ? "mt-2.5" : "mt-4 md:mt-10",
          )}
        >
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
      ) : null}
    </article>
  );
}
