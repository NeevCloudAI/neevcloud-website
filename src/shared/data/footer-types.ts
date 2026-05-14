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
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  button1Text: string;
  button2Text?: string;
};
