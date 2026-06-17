import { Poppins, Space_Mono } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { defaultMetadata } from "@/lib/seo";
import { GTM_ID, GA_ID } from "@/shared/constants/analytics.constants";
import MicrosoftClarity from "@/shared/components/analytics/MicrosoftClarity";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
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
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body className={`${poppins.variable} ${spaceMono.variable}`}>
        {children}
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        <MicrosoftClarity />
      </body>
    </html>
  );
}
