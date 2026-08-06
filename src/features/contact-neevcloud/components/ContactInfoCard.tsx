import { Text } from "@/shared/ui-lib";
import { Calendar, Mail, Phone } from "@/shared/icons/lucide-icon-map";
import type { ContactInfoCardItem } from "../types/conversation-section.types";

const CONTACT_INFO_ICONS = {
  calendar: Calendar,
  phone: Phone,
  mail: Mail,
} as const;

type ContactInfoCardProps = {
  card: ContactInfoCardItem;
};

const ContactInfoCard = ({ card }: ContactInfoCardProps) => {
  const Icon = CONTACT_INFO_ICONS[card.icon];
  const isExternal = card.href.startsWith("http");

  return (
    <a
      href={card.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block border border-primary-105 bg-white p-4 md:p-9 w-full transition-colors hover:border-primary"
    >
      <div className="flex flex-col">
        <Icon className="size-9 text-primary" strokeWidth={1.75} />
        <Text as="h3" weight="semibold" className="mt-4">
          {card.title}
        </Text>
        <Text as="h4" textColor="black/82" className="mt-2.5">
          {card.description}
        </Text>
      </div>
    </a>
  );
};

export default ContactInfoCard;
