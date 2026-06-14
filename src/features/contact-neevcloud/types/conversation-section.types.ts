export type ContactInfoCardIcon = "calendar" | "phone" | "mail";

export type ContactInfoCardItem = {
  id: string;
  title: string;
  description: string;
  icon: ContactInfoCardIcon;
};
