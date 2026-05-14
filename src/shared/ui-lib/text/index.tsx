import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { textVariants } from "./text-variants";

interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: keyof HTMLElementTagNameMap;
}

function Text({
  as: Component = "p",
  className,
  variant,
  weight,
  align,
  textColor,
  lineHeight,
  fontFamily,
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
          fontFamily,
        })
      )}
      {...props}
    />
  );
}

export { Text };
