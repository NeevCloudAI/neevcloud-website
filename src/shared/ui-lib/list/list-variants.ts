import { cva } from "class-variance-authority";

export const listVariants = cva("", {
  variants: {
    variant: {
      none: "list-none",
      disc: "list-disc list-outside pl-5",
      decimal: "list-decimal text-sm list-outside space-y-2.5 pl-2.5",
      legal: "list-disc list-outside text-sm text-gray-05 space-y-2.5 pl-2.5",
    },
    weight: {
      default: "",
      semibold: "font-semibold",
    },
    markerColor: {
      default: "",
      primary: "marker:text-primary",
    },
  },
  defaultVariants: {
    variant: "disc",
    markerColor: "default",
  },
});

export const listItemVariants = cva("", {
  variants: {
    variant: {
      default: "",
      legal: "text-sm text-gray-05",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
