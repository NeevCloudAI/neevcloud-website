import Image from "next/image";
import Link from "next/link";
import { LinkComponent } from "@/shared/ui-lib";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export default function OfferLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative bg-black">
      <header className="z-50 w-full bg-black/90 sticky top-0">
        <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between p-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/icons/logo-white-with-name.svg"
              alt="NeevCloud"
              width={130}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
          <LinkComponent
            href={EXTERNAL_LINKS.signup}
            target="_blank"
            spacing="lg"
            size="sm"
          >
            Login
          </LinkComponent>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
