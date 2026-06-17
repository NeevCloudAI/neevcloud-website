import Image from "next/image";
import Link from "next/link";
import { Text } from "../ui-lib";
import Container from "./container";
import FooterCard from "./footer-card";
import {
  FOOTER_BRANDING,
  FOOTER_LINK_GROUPS,
  FOOTER_SOCIAL_LINKS,
} from "../data/footer-data";
import type { FooterCtaContent, FooterLinkGroup } from "../data/footer-types";
import { cn } from "@/lib/utils";

const footerLinkClassName = "flex flex-col text-white/62 pb-2.5 text-sm";

const FooterComponent = ({
  title,
  description,
  primaryCta,
  primaryCtaRoute,
  primaryCtaTarget,
  secondaryCta,
  secondaryCtaRoute,
  secondaryCtaTarget,
  className,
}: FooterCtaContent) => {
  return (
    <footer
      className={cn("relative bg-black py-8 md:py-16 2xl:py-25", className)}
    >
      <Container className="flex flex-col gap-6 md:gap-25">
        <FooterCard
          title={title || ""}
          description={description || ""}
          primaryCta={primaryCta || ""}
          primaryCtaRoute={primaryCtaRoute || ""}
          primaryCtaTarget={primaryCtaTarget}
          secondaryCta={secondaryCta || ""}
          secondaryCtaRoute={secondaryCtaRoute || ""}
          secondaryCtaTarget={secondaryCtaTarget}
        />

        <div className="mb-4 md:mb-16 w-full flex flex-col md:flex-row gap-8 md:gap-16 text-white">
          <div className="flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-5">
              <Image
                src={FOOTER_BRANDING.logo}
                alt="NeevCloud logo"
                width={150}
                height={150}
              />
              <div>
                <Text>{FOOTER_BRANDING.taglineLine1}</Text>
                <Text>{FOOTER_BRANDING.taglineLine2}</Text>
              </div>
              <ul className="flex gap-2 md:gap-4 mb-2">
                {FOOTER_SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      className="inline-flex"
                    >
                      <Image
                        src={social.icon}
                        alt={social.label}
                        width={20}
                        height={20}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Image
                src={FOOTER_BRANDING.certificationImage}
                alt="ISO Certifications"
                width={350}
                height={350}
              />
            </div>
            <Text textColor="white/32" className="whitespace-nowrap">
              © 2026, NeevAI SuperCloud Pvt. Ltd.
            </Text>
          </div>
          <nav
            aria-label="Footer"
            className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4  md:gap-y-15 md:gap-x-8"
          >
            {FOOTER_LINK_GROUPS.map((group) => (
              <FooterLinkColumn key={group.title} group={group} />
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
};

type FooterLinkColumnProps = {
  group: FooterLinkGroup;
};

const FooterLinkColumn = ({ group }: FooterLinkColumnProps) => {
  return (
    <div>
      <Text as="h6" weight="semibold" className="mb-2 md:mb-5">
        {group.title}
      </Text>
      <ul>
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={cn(footerLinkClassName, "hover:text-white")}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterComponent;
