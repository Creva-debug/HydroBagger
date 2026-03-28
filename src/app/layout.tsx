import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { imageUrl } from "@/lib/images";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const defaultMetadata = {
  title: {
    default: "HydroBagger – prace hydrotechniczne w trudnym terenie",
    template: "%s",
  },
  description:
    "Prace hydrotechniczne z lądu i wody. Bagna, torfy, cieki – wchodzimy tam, gdzie inni się poddają.",
};

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: {
    icon: [{ url: imageUrl("cropped-favicon.png"), type: "image/png" }],
    shortcut: imageUrl("cropped-favicon.png"),
    apple: imageUrl("cropped-favicon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        id="top"
        className={`${inter.variable} ${montserrat.variable} font-sans flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
