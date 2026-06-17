import GpuHeader from "@/shared/components/header/gpu-header";
import { Divider } from "@/shared/ui-lib";

export default function DarkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <GpuHeader />
      <Divider orientation="horizontal" className="bg-gray-05" />
      <main>{children}</main>
    </div>
  );
}
