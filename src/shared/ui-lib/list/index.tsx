import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { listItemVariants, listVariants } from "./list-variants";

type ListProps = React.HTMLAttributes<HTMLUListElement> &
  VariantProps<typeof listVariants> & {
    as?: "ul" | "ol";
  };

function List({
  as: Component = "ul",
  className,
  variant,
  markerColor,
  weight,
  ...props
}: ListProps) {
  return (
    <Component
      data-slot="list"
      className={cn(
        listVariants({
          variant,
          markerColor,
          weight,
          className,
        }),
      )}
      {...props}
    />
  );
}

type LiProps = React.HTMLAttributes<HTMLLIElement> &
  VariantProps<typeof listItemVariants>;

function Li({ className, variant, ...props }: LiProps) {
  return (
    <li
      data-slot="list-item"
      className={cn(listItemVariants({ variant, className }))}
      {...props}
    />
  );
}

export { List, Li };
