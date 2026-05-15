import Image from "next/image";
import Link from "next/link";
import { Text } from "../ui-lib";
import Container from "./container";
import FooterCard from "./footer-card";
import {
  FOOTER_BRANDING,
  FOOTER_CTA,
  FOOTER_LINK_GROUPS,
  FOOTER_SOCIAL_LINKS,
} from "../data/footer-data";
import type { FooterLinkGroup } from "../data/footer-types";

const FooterComponent = () => {
  return (
    <footer className="bg-black py-4 md:py-16">
      <Container className="flex flex-col gap-12 md:gap-16">
        <FooterCard
          title={FOOTER_CTA.title}
          description={FOOTER_CTA.description}
          button1Text={FOOTER_CTA.button1Text}
          button2Text={FOOTER_CTA.button2Text}
        />

        <div className="mb-4 md:mb-16 w-full flex flex-col md:flex-row gap-8 md:gap-16 text-white">
          <div className="flex flex-col gap-6">
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
            <ul className="flex gap-2 md:gap-4">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
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
              width={300}
              height={300}
            />
          </div>
          <nav
            aria-label="Footer"
            className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-8"
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
      <Text as="h6" weight="semibold" className="mb-2 md:mb-6">
        {group.title}
      </Text>
      <ul>
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="flex flex-col text-white-50 hover:text-white pb-3.5 text-sm"
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
