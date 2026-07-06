import type { Metadata } from "next";
import { Suspense } from "react";
import { Montserrat, Geist } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ViewportHeightFix } from "@/components/ViewportHeightFix";
import { CookieConsent } from "@/components/cookie-consent";
import { SiteStructuredData } from "@/components/SiteStructuredData";
import { AnalyticsProvider } from "@/lib/analytics/analytics-provider";
import { PreviewModeInterceptor } from "@/components/PreviewModeInterceptor";
import { imageUrl } from "@/lib/images";
import { getSiteOrigin } from "@/lib/site-url";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
  adjustFontFallback: true,
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
  adjustFontFallback: true,
});

const defaultMetadata = {
  title: {
    default: "HydroBagger – prace hydrotechniczne w trudnym terenie",
    template: "%s",
  },
  description:
    "Prace hydrotechniczne z lądu i wody. Bagna, torfy, cieki – wchodzimy tam, gdzie inni się poddają.",
};

// Metadane (w tym nadpisania SEO z panelu mngmt.hydrobagger.pl) są czytane
// z bazy w generateMetadata() każdej podstrony — odświeżamy je okresowo (ISR),
// żeby zmiana w panelu była widoczna bez pełnego redeployu.
export const revalidate = 60;

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
    <html lang="pl" className={cn("font-sans", geist.variable, montserrat.variable)}>
      <head>
        <link rel="preconnect" href="https://creva.b-cdn.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://creva.b-cdn.net" />
      </head>
      <body id="top" className="font-sans flex min-h-screen flex-col antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',security_storage:'granted',wait_for_update:2000});try{var m=document.cookie.match(/(?:^|; )hydrobagger_consent=([^;]*)/);if(m){var c=JSON.parse(decodeURIComponent(m[1]));if(c&&c.v===1){gtag('consent','update',{ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied',analytics_storage:c.analytics?'granted':'denied',security_storage:'granted'});dataLayer.push({event:'consent_defaults_restored',analytics_storage:c.analytics?'granted':'denied'});}}}catch(e){}})();`,
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
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <Suspense fallback={null}>
          <PreviewModeInterceptor />
        </Suspense>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
