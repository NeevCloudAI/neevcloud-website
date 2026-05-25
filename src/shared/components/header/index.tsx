import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Divider } from "@/shared/ui-lib";
import Container from "../container";
import AiSupercloudDesktopTrigger from "./ai-supercloud-desktop-trigger";
import HeaderMenu from "./header-menu";

const HeaderComponent = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-10 shadow-sm">
      <Container className="relative flex flex-wrap items-center gap-3 py-3 md:flex-nowrap md:py-0">
        <HeaderMenu>
          <Link href="/">
            <Image
              src={"/icons/logo-black.svg"}
              alt="logo"
              width={100}
              height={100}
              className="h-7 w-auto"
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
