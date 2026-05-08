import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { textVariants } from "./text-variants";

interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: keyof HTMLElementTagNameMap;
  lineHeight?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  textColor?:
    | "default"
    | "primary"
    | "secondary"
    | "tertiary"
    | "white"
    | "black"
    | "white-50"
    | "gray-10"
    | "blue-40";
}

function Text({
  as: Component = "p",
  className,
  variant,
  weight,
  align,
  textColor,
  lineHeight,
  ...props
}: TextProps) {
  return (
    <Component
      data-slot="text"
      className={cn(
        textVariants({
          variant,
          align,
          weight,
          className,
          textColor,
          lineHeight,
        })
      )}
      {...props}
    />
  );
}

export { Text };
