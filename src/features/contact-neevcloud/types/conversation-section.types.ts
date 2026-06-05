export type ContactInfoCardIcon = "calendar" | "phone" | "mail";

export type ContactInfoCardItem = {
  id: string;
  title: string;
  description: string;
  icon: ContactInfoCardIcon;
};

export type ContactFormField = {
  id: string;
  label: string;
  name: string;
  type: "text" | "email" | "tel" | "textarea";
  autoComplete?: string;
  optional?: boolean;
  fullWidth?: boolean;
};
