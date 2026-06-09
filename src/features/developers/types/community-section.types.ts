export type DevelopersCommunityCardItem = {
  id: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaTarget: "_blank" | "_self" | "_parent" | "_top";
};

export type DevelopersChangelogCardItem = {
  label: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaTarget: "_blank" | "_self" | "_parent" | "_top";
};
