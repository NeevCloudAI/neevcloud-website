export type FooterSocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: readonly FooterLink[];
};

export type FooterBranding = {
  logo: string;
  taglineLine1: string;
  taglineLine2: string;
  certificationImage: string;
};

export type FooterCtaContent = {
  className?: string;
  title?: string;
  description?: string;
  primaryCta?: string;
  primaryCtaRoute?: string;
  primaryCtaTarget?: "_blank" | "_self" | "_parent" | "_top";
  secondaryCta?: string;
  secondaryCtaRoute?: string;
  secondaryCtaTarget?: "_blank" | "_self" | "_parent" | "_top";
};
