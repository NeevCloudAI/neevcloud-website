import { Instrument_Sans, Poppins, Space_Mono } from "next/font/google";
import { buildOrganizationSchema, defaultMetadata } from "@/lib/seo";
import DeferredAnalytics from "@/shared/components/analytics/DeferredAnalytics";
import JsonLd from "@/shared/components/JsonLd";
import RouteProgressBar from "@/shared/components/route-progress-bar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${instrumentSans.variable} ${spaceMono.variable}`}
      >
        <JsonLd data={buildOrganizationSchema()} />
        <RouteProgressBar />
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
