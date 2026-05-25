import { cn } from "@/lib/utils";
import { Button, Text } from "@/shared/ui-lib";
import { SquareCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

export type CategoryFeatureHoverDetail = {
  label?: string;
  tasks: readonly { id: number; title: string }[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type CategoryFeatureItem = {
  icon: string;
  badgeLabel: string;
  title: string;
  description: string;
  features: readonly {
    id: number;
    title: string;
    description?: string;
    icon?: string | LucideIcon;
  }[];
};

export type CategoryFeatureCardProps = {
  category: CategoryFeatureItem;
  hover?: CategoryFeatureHoverDetail;
  className?: string;
  iconSize?: number;
  hasHover?: boolean;
};

export function CategoryFeatureCard({
  category,
  hover,
  className,
  iconSize = 30,
  hasHover = false,
}: CategoryFeatureCardProps) {
  const { badgeLabel, title, description, features } = category;
  const showHoverOverlay = hasHover && hover != null;

  return (
    <article
      className={cn(
        "flex w-full flex-col rounded-md bg-gray-10 p-4 md:p-10",
        showHoverOverlay && "group relative overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          showHoverOverlay &&
            "transition-opacity duration-300 ease-out group-hover:pointer-events-none group-focus-within:pointer-events-none",
        )}
      >
        <div className="w-fit rounded-md bg-white p-3.75">
          <Image
            src={category.icon}
            alt={title}
            width={iconSize}
            height={iconSize}
          />
        </div>
        <Text as="h5" className="pt-5">
          {badgeLabel}
        </Text>
        <Text as="h3" weight="semibold" className="mt-2.5 text-3xl">
          {title}
        </Text>
        <Text as="h6" className="mt-2.5">
          {description}
        </Text>
        <ul className="mt-2 flex list-none flex-col gap-1.25 md:mt-7.5">
          {features.map((feature) => (
            <li
              key={feature.id}
              className="flex gap-2.5 rounded-md bg-white px-3.75 py-2.5"
            >
              {feature.icon ? (
                <Image
                  src={feature.icon as string}
                  alt={feature.title}
                  width={22}
                  height={22}
                />
              ) : (
                <Text as="h6" textColor="primary" className="shrink-0">
                  •
                </Text>
              )}
              {feature.description ? (
                <div>
                  <Text as="h6" weight="regular">
                    {feature.title}
                  </Text>
                  <Text as="small" textColor="gray-85">
                    {feature.description}
                  </Text>
                </div>
              ) : (
                <Text as="h6">{feature.title}</Text>
              )}
            </li>
          ))}
        </ul>
      </div>

      {showHoverOverlay ? (
        <div
          className={cn(
            "absolute inset-0 flex translate-y-full flex-col bg-primary/92 p-4 backdrop-blur-md transition-transform duration-500 ease-out md:py-25 md:px-10",
            "group-hover:translate-y-0 group-focus-within:translate-y-0",
          )}
        >
          <Text
            as="h5"
            textColor="white-50"
            className="uppercase tracking-wide"
          >
            {hover.label ?? "TRY THESE TASKS"}
          </Text>

          <ul className="flex flex-1 list-none flex-col mt-4 gap-2.5">
            {hover.tasks.map((task) => (
              <li key={task.id} className="flex items-center gap-2.5">
                <SquareCheck size={18} className="text-white" strokeWidth={3} />
                <Text as="h6" textColor="white">
                  {task.title}
                </Text>
              </li>
            ))}
          </ul>

          <Button variant="black" weight="semibold" className="mt-6 w-fit">
            {hover.ctaLabel}
          </Button>
        </div>
      ) : null}
    </article>
  );
}
