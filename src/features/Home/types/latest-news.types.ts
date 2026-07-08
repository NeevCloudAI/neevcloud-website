export type LatestNewsTheme = "light" | "dark";

export type LatestNewsItem = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  /** "light" image = dark title text; "dark" image = light title text */
  theme: LatestNewsTheme;
};
