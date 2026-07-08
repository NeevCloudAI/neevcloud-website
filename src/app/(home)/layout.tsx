import HeaderComponent from "@/shared/components/header";

// Homepage-only layout: transparent header overlaid on the dark 2026 hero.
// All other pages keep the standard (default) layout with the white header.
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <HeaderComponent transparent />
      <main>{children}</main>
    </div>
  );
}
