import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://neevcloud.com"),
  title: {
    default: "NeevCloud | India's AI SuperCloud",
    template: "%s",
  },
  description:
    "Full-stack AI infrastructure built to scale fearlessly. Run AI workloads with sovereign control, security, and scalability on India-resident GPU and CPU compute.",
  openGraph: {
    type: "website",
    siteName: "NeevCloud",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
