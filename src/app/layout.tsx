import type { Metadata } from "next";
import { Inter, Montserrat, Geist } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ViewportHeightFix } from "@/components/ViewportHeightFix";
import { CookieConsent } from "@/components/cookie-consent";
import { SiteStructuredData } from "@/components/SiteStructuredData";
import { imageUrl } from "@/lib/images";
import { getSiteOrigin } from "@/lib/site-url";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  metadataBase: new URL(getSiteOrigin()),
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <html lang="pl" className={cn("font-sans", geist.variable)}>
      <body
        id="top"
        className={`${geist.variable} ${montserrat.variable} font-sans flex min-h-screen flex-col antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',security_storage:'granted'});`,
          }}
        />
        {gtmId ? (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
          />
        ) : null}
        <ViewportHeightFix />
        <SiteStructuredData />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
