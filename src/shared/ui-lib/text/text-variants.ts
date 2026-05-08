import { cva } from "class-variance-authority";

export const textVariants = cva("h-fit", {
  variants: {
    variant: {
      default: "",
      link: "underline decoration cursor-pointer",
    },
    weight: {
      regular: "font-regular",
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
      "white-50": "text-white-50",
      "gray-10": "text-gray-10",
      "blue-40": "text-blue-40",
    },
    lineHeight: {
      xs: "leading-5",
      sm: "leading-6",
      md: "leading-8",
      lg: "leading-10",
      xl: "leading-12",
      xxl: "leading-14",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
