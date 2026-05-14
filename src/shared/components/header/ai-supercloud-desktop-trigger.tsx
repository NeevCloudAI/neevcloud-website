"use client";

import { Button, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import AiSupercloudMegaMenu from "./mega-menus/ai-supercloud-mega-menu";

const megaMenuPanelClassName = cn(
  "pointer-events-none absolute left-1/2 top-full z-100",
  "w-full max-w-[min(1200px,calc(100vw-2rem))]",
  "-translate-x-1/2",
  "rounded-b-md bg-white opacity-0 shadow-md",
  "transition-opacity duration-150",
  "group-hover:pointer-events-auto group-hover:opacity-100",
  "group-focus-within:pointer-events-auto group-focus-within:opacity-100",
);

export default function AiSupercloudDesktopTrigger() {
  return (
    <div className={cn("group ml-2 hidden md:ml-4 md:block")}>
      <div className="h-20 relative flex items-center after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out after:content-[''] group-hover:after:scale-x-100 group-focus-within:after:scale-x-100">
        <Button
          variant="ghost"
          textColor="black"
          spacing="none"
          className="min-h-20"
        >
          <Text weight="semibold" className="whitespace-nowrap">
            AI SuperCloud
          </Text>
        </Button>
      </div>
      <div className={megaMenuPanelClassName} role="presentation">
        <AiSupercloudMegaMenu />
      </div>
    </div>
  );
}
