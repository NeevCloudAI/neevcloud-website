import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button-variants";

function Button({
  className,
  variant,
  type = "button",
  borderRadius,
  size,
  textColor,
  weight,
  spacing,
  backgroundColor,
  fontFamily,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      type={type}
      className={cn(
        buttonVariants({
          variant,
          size,
          borderRadius,
          textColor,
          weight,
          spacing,
          className,
          backgroundColor,
          fontFamily,
        })
      )}
      {...props}
    />
  );
}

export { Button };
