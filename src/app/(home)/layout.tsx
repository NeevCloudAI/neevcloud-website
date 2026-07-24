import HeaderComponent from "@/shared/components/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <HeaderComponent />
      <main>{children}</main>
    </div>
  );
}
