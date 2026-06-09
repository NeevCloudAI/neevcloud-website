import { cn } from "@/lib/utils";
import { Text } from "../ui-lib";
import LinkComponent from "../ui-lib/link";

interface FooterCardProps {
  title: string;
  description: string;
  primaryCta: string;
  primaryCtaRoute?: string;
  primaryCtaTarget?: "_blank" | "_self" | "_parent" | "_top";
  secondaryCta?: string;
  secondaryCtaRoute?: string;
  secondaryCtaTarget?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
}

const FooterCard = ({
  title,
  description,
  primaryCta,
  primaryCtaRoute,
  primaryCtaTarget,
  secondaryCta,
  secondaryCtaRoute,
  secondaryCtaTarget,
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
        <LinkComponent
          href={primaryCtaRoute ?? ""}
          target={primaryCtaTarget}
          variant="outline-primary"
          spacing="lg"
        >
          {primaryCta}
        </LinkComponent>
        {secondaryCta && (
          <LinkComponent
            href={secondaryCtaRoute ?? ""}
            target={secondaryCtaTarget}
            variant="black"
            spacing="lg"
          >
            {secondaryCta}
          </LinkComponent>
        )}
      </div>
      <div className="absolute w-[50%] h-full top-10 right-[-5%] bg-[url('/icons/logo-large.svg')] bg-cover bg-center bg-no-repeat opacity-50"></div>
    </section>
  );
};

export default FooterCard;
