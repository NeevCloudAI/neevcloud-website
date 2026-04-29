import { cva } from "class-variance-authority";

export const textVariants = cva("h-fit", {
  variants: {
    variant: {
      default: "",
      link: "underline decoration cursor-pointer",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    textColor: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
      white: "text-white",
      black: "text-black",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
