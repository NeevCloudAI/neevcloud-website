export type HeaderNavId =
  | "inference-hub"
  | "product"
  | "solutions"
  | "pricing"
  | "developers"
  | "resources"
  | "company";

export type NavItem = {
  id: HeaderNavId;
  label: string;
  desktopVisibilityClass: string;
  menuVisibilityClass: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: "inference-hub",
    label: "Inference Hub",
    desktopVisibilityClass: "hidden header-inference:block",
    menuVisibilityClass: "header-inference:hidden",
  },
  {
    id: "product",
    label: "Product",
    desktopVisibilityClass: "hidden header-product:block",
    menuVisibilityClass: "header-product:hidden",
  },
  {
    id: "solutions",
    label: "Solutions",
    desktopVisibilityClass: "hidden header-solutions:block",
    menuVisibilityClass: "header-solutions:hidden",
  },
  {
    id: "pricing",
    label: "Pricing",
    desktopVisibilityClass: "hidden header-pricing:block",
    menuVisibilityClass: "header-pricing:hidden",
  },
  {
    id: "developers",
    label: "Developers",
    desktopVisibilityClass: "hidden header-developers:block",
    menuVisibilityClass: "header-developers:hidden",
  },
  {
    id: "resources",
    label: "Resources",
    desktopVisibilityClass: "hidden header-resource:block",
    menuVisibilityClass: "header-resource:hidden",
  },
  {
    id: "company",
    label: "Company",
    desktopVisibilityClass: "hidden header-company:block",
    menuVisibilityClass: "header-company:hidden",
  },
];
