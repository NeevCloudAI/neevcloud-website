import Image from "next/image";
import Link from "next/link";
import { Divider } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import Container from "../container";
import AiSupercloudDesktopTrigger from "./ai-supercloud-desktop-trigger";
import HeaderMenu from "./header-menu";

type HeaderComponentProps = {
  /** Transparent overlay variant (light logo + light nav) used on the dark homepage hero. */
  transparent?: boolean;
};

const HeaderComponent = ({ transparent = false }: HeaderComponentProps) => {
  return (
    <header
      className={cn(
        "z-50 w-full",
        transparent
          ? "absolute inset-x-0 top-0 bg-transparent"
          : "sticky top-0 bg-white/90 shadow-sm backdrop-blur-xs",
      )}
    >
      <Container className="relative flex flex-wrap items-center gap-3 py-4 md:flex-nowrap md:py-0">
        <HeaderMenu transparent={transparent}>
          <Link href="/">
            <Image
              src={
                transparent
                  ? "/icons/logo-white-with-name.svg"
                  : "/icons/logo-black-with-name.svg"
              }
              alt="logo"
              width={100}
              height={100}
              className="h-6 w-auto md:h-7"
            />
          </Link>
          <AiSupercloudDesktopTrigger />
          <Divider className="hidden min-h-8 header-buttons:block" />
        </HeaderMenu>
      </Container>
    </header>
  );
};

export default HeaderComponent;
