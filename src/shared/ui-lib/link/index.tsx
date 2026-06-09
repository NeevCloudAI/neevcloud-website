import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import { linkVariants } from "./link-variants";
import { cn } from "@/lib/utils";

const LinkComponent = ({
  href,
  variant,
  size,
  weight,
  spacing,
  fontFamily,
  backgroundColor,
  borderRadius,
  textColor,
  className,
  ...props
}: React.ComponentProps<typeof Link> & VariantProps<typeof linkVariants>) => {
  return (
    <Link
      href={href}
      className={cn(
        linkVariants({
          variant,
          size,
          className,
          weight,
          spacing,
          fontFamily,
          backgroundColor,
          borderRadius,
          textColor,
        })
      )}
      {...props}
    />
  );
};

export default LinkComponent;
