import HomeHeader from "@/features/Home/components/HomeHeader";

// Homepage-only layout: transparent nav (matching Paper) overlaid on the dark hero.
// All other pages keep the standard (default) layout with the white header.
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <HomeHeader />
      <main>{children}</main>
    </div>
  );
}
