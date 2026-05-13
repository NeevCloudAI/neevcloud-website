import Image from "next/image";
import { Divider } from "@/shared/ui-lib";
import Container from "../container";
import AiSupercloudDesktopTrigger from "./ai-supercloud-desktop-trigger";
import HeaderMenu from "./header-menu";

const HeaderComponent = () => {
  return (
    <Container className="relative flex min-h-16 flex-wrap items-center gap-3 py-3 md:min-h-20 md:flex-nowrap md:py-0">
      <HeaderMenu>
        <Image
          src={"/icons/logo-black.svg"}
          alt="logo"
          width={100}
          height={100}
          className="h-7 w-auto"
        />
        <AiSupercloudDesktopTrigger />
        <Divider className="min-h-8 hidden header-buttons:block" />
      </HeaderMenu>
    </Container>
  );
};

export default HeaderComponent;
