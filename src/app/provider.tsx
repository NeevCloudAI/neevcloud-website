import AnnouncementSection from "@/shared/components/AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      {children}
    </div>
  );
};

export default Providers;
