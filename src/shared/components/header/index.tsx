import Image from "next/image";
import Link from "next/link";
import { Divider } from "@/shared/ui-lib";
import Container from "../container";
import AiSupercloudDesktopTrigger from "./ai-supercloud-desktop-trigger";
import HeaderMenu from "./header-menu";

const HeaderComponent = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xs shadow-sm">
      <Container className="relative flex flex-wrap items-center gap-3 py-4 md:flex-nowrap md:py-0">
        <HeaderMenu>
          <Link href="/">
            <Image
              src={"/icons/logo-black-with-name.svg"}
              alt="logo"
              width={100}
              height={100}
              className="h-6 md:h-7 w-auto"
            />
          </Link>
          <AiSupercloudDesktopTrigger />
          <Divider className="min-h-8 hidden header-buttons:block" />
        </HeaderMenu>
      </Container>
    </header>
  );
};

export default HeaderComponent;
