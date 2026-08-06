import AnnouncementSection from "@/shared/components/AnnouncementSection";
import HeaderComponent from "@/shared/components/header";

export default function DarkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative bg-black">
      <AnnouncementSection />
      <HeaderComponent />
      <main>{children}</main>
    </div>
  );
}
