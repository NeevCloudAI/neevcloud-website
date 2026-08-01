import HeaderComponent from "@/shared/components/header";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative bg-black">
      <HeaderComponent />
      <main>{children}</main>
    </div>
  );
}
