export type FooterSocialLink = {
  label: string;
  href: string;
  icon: string;
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
