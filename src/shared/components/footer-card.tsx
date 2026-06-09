import { cn } from "@/lib/utils";
import { Button, Text } from "../ui-lib";

interface FooterCardProps {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
  className?: string;
}

const FooterCard = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: FooterCardProps) => {
  return (
    <section
      className={cn(
        "relative w-full rounded-md bg-primary-105 py-6 md:py-29 px-6 md:px-17.5 flex flex-col overflow-hidden",
        className
      )}
    >
      <Text as="h1" weight="medium" className="max-w-2xl">
        {title}
      </Text>
      <Text as="h6" className="z-2 mt-2.5 max-w-xl">
        {description}
      </Text>
      <div className="mt-2 md:mt-7.5 flex gap-4 z-1">
        <Button
          variant="outline-primary"
          textColor="black"
          spacing="md"
          weight="semibold"
        >
          {primaryCta}
        </Button>
        {secondaryCta && (
          <Button variant={"black"} spacing="md">
            {secondaryCta}
          </Button>
        )}
      </div>
      <div className="absolute w-[50%] h-full top-10 right-[-5%] bg-[url('/icons/logo-large.svg')] bg-cover bg-center bg-no-repeat opacity-50"></div>
    </section>
  );
};

export default FooterCard;
