import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import LinkComponent from "@/shared/ui-lib/link";

const GpuHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black backdrop-blur-xs shadow-sm">
      <Container className="shadow-md relative flex flex-wrap items-center justify-between gap-3 py-3 md:flex-nowrap md:py-6.5 ">
        <Link href="/">
          <Image
            src="/icons/logo-white.svg"
            alt="logo"
            width={100}
            height={100}
            className="h-7 w-auto"
          />
        </Link>
        <LinkComponent href={"/contact-neevcloud"}>
          Request a Call
        </LinkComponent>
      </Container>
    </header>
  );
};

export default GpuHeader;
