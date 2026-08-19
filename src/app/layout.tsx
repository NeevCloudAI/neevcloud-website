import { Instrument_Sans, Poppins, Roboto, Space_Mono } from "next/font/google";
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

// Blog reading typeface — kept scoped to blog content rather than the
// global sans UI (Poppins/Instrument Sans).
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
        className={`${poppins.variable} ${instrumentSans.variable} ${spaceMono.variable} ${roboto.variable}`}
      >
        <JsonLd data={buildOrganizationSchema()} />
        <RouteProgressBar />
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
