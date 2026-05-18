import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OSTAR Group — Forged Flanges & Pipe Fittings",
    template: "%s — OSTAR Group",
  },
  description:
    "OSTAR Group manufactures forged high-pressure flanges and pipe fittings to ANSI, ASME, DIN, BS and JIS standards. Supplying Oil & Gas, Petrochemical, Marine and Power industries worldwide since 1998. ISO, TÜV and CE certified.",
  keywords: [
    "OSTAR Group",
    "forged flanges",
    "pipe fittings",
    "ANSI B16.5",
    "ASME B16.47",
    "DIN flanges",
    "BS 4504",
    "JIS B2220",
    "butt weld fittings",
    "oil and gas supplier UAE",
    "Dubai flange supplier",
  ],
  authors: [{ name: "OSTAR Group" }],
  openGraph: {
    title: "OSTAR Group — Forged Flanges & Pipe Fittings",
    description:
      "High-pressure flanges and fittings to ANSI, ASME, DIN, BS and JIS. ISO, TÜV and CE certified. Dubai sales hub for worldwide industrial buyers.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4EFE6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain relative">
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
