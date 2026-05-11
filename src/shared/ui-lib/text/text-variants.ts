import { cva } from "class-variance-authority";

export const textVariants = cva("h-fit", {
  variants: {
    variant: {
      default: "",
      link: "underline decoration cursor-pointer",
      h1: "text-xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold mx-1 md:mx-1.5",
      h2: "text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mx-1 md:mx-1.5",
      h3: "text-base sm:text-lg md:text-xl lg:text-2xl font-medium mx-1 md:mx-1.5",
      h4: "text-sm sm:text-base md:text-lg lg:text-xl font-medium mx-1 md:mx-1.5",
      h5: "text-xs sm:text-sm md:text-base lg:text-lg font-normal mx-1 md:mx-1.5",
      h6: "text-xs sm:text-xs md:text-sm lg:text-base font-normal mx-1 md:mx-1.5",
      p: "text-sm mx-1 md:mx-1.5",
      small: "text-xs block mx-1 md:mx-1.5",
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
      "gray-60": "text-gray-60",
      "gray-65": "text-gray-65",
      "primary-60": "text-primary-60",
    },
    lineHeight: {
      xs: "leading-5",
      sm: "leading-6",
      md: "leading-8",
      lg: "leading-10",
      xl: "leading-12",
      xxl: "leading-14",
      xxxl: "leading-16",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
