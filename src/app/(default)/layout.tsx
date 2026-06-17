import AnnouncementSection from "@/shared/components/AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <main>{children}</main>
    </div>
  );
}
