import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { textVariants } from "./text-variants";

interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: keyof HTMLElementTagNameMap;
  textColor?: "default" | "primary" | "secondary" | "tertiary";
}

function Text({
  as: Component = "p",
  className,
  variant,
  weight,
  align,
  textColor,
  ...props
}: TextProps) {
  return (
    <Component
      data-slot="text"
      className={cn(
        textVariants({ variant, align, weight, className, textColor })
      )}
      {...props}
    />
  );
}

export { Text };
